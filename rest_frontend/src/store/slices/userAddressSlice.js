import {createSlice} from "@reduxjs/toolkit";
import {fetchAllUserAddress} from "../thunks/userAddressThunks";

const UserAddressSlice = createSlice({
    name: 'user-address',
    initialState: {
        data: [],
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchAllUserAddress.fulfilled, (state, action) => {
            state.data = action.payload;
        })
    }
});

export const UserAddressReducer = UserAddressSlice.reducer;
