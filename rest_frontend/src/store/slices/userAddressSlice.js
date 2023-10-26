import {createSlice} from "@reduxjs/toolkit";
import {fetchAllUserAddress} from "../thunks/userAddressThunks";

const UserAddressSlice = createSlice({
    name: 'user-address',
    initialState: {
        isLoading: false,
        isError: [],
        data: [],
        record: {},
        count: 0,
        page:1
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchAllUserAddress.fulfilled, (state, action) => {
            state.data = action.payload.results;
        })
    }
});

export const UserAddressReducer = UserAddressSlice.reducer;
