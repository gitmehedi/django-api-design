import {createSlice} from '@reactjs/toolkit';
import {fetchAuthUser} from '../thunks/authThunks';


const AuthSlice = createSlice({
    name: 'authentication',
    initialState: {
        data: []
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchAuthUser.fulfilled,(state,action)=>{
            state.data.push(action)
        })
    }
});

export const AuthReducer = AuthSlice.reducer;