import {createSlice} from "@reduxjs/toolkit";
import {hostURL} from '../utils/env';
import {
    checkAuthUser,
    logoutUser,
    registerUser,
    updateProfile,
    userProfile,
    updateProfileImage
} from "src/store/thunks/authThunks";


const default_image = hostURL + '/media/profile/ds_classification.png';
const access = localStorage.getItem('access') ? localStorage.getItem('access') : null;
const loggedIn = localStorage.getItem('loggedIn') ? localStorage.getItem('loggedIn') : false;
const profile = localStorage.getItem('profile_url') ? localStorage.getItem('profile_url') : default_image;
const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoading: false,
        data: {'access': access, 'refresh': ''},
        profile: {},
        loggedIn: loggedIn,
        profile_url: profile
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(checkAuthUser.pending, (state, action) => {
            state.isLoading = true;
            state.loggedIn = false;
        }).addCase(checkAuthUser.fulfilled, (state, action) => {
            let {access, refresh} = action.payload;
            if (access && refresh) {
                state.data = action.payload;
                state.isLoading = false;
                state.loggedIn = true;
                localStorage.setItem('access', access);
                localStorage.setItem('refresh', refresh);
                localStorage.setItem('loggedIn', 'login');
            } else {
                state.loggedIn = false;
            }
        })

        builder.addCase(logoutUser.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(logoutUser.fulfilled, (state, action) => {
            state.data = {'access': '', 'refresh': ''}
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            localStorage.removeItem('loggedIn');
            localStorage.removeItem('profile_url');
            state.loggedIn = false;
            state.isLoading = false;
        })

        builder.addCase(registerUser.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(registerUser.fulfilled, (state, action) => {
            state.loggedIn = false;
            state.isLoading = false;
        })

        builder.addCase(userProfile.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(userProfile.fulfilled, (state, action) => {
            let profile = action.payload;
            state.profile = profile;
            state.profile_image = profile.profile_url;
            localStorage.setItem('profile_image', profile.profile_url);
            state.isLoading = false;
        })

        builder.addCase(updateProfile.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(updateProfile.fulfilled, (state, action) => {
            state.profile = action.payload;
            state.isLoading = false;
        })

        builder.addCase(updateProfileImage.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(updateProfileImage.fulfilled, (state, action) => {
            state.profile_image = action.payload.profile_url;
            state.isLoading = false;
        })
    }
});

export const AuthReducer = AuthSlice.reducer;