import {createSlice} from "@reduxjs/toolkit";
import {checkAuthUser, logoutUser} from "src/store/thunks/authThunks";

const access = localStorage.getItem('access') ? localStorage.getItem('access') : null;
const loggedIn = localStorage.getItem('loggedIn') ? localStorage.getItem('loggedIn') : false;
const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoading: false,
        data: {'access': access, 'refresh': ''},
        loggedIn: loggedIn
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
            state.isLoading = false;
            state.loggedIn = true;
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            localStorage.removeItem('loggedIn');
        })
    }
});

export const AuthReducer = AuthSlice.reducer;