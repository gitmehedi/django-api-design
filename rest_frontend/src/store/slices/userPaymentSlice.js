import {createSlice} from "@reduxjs/toolkit";
import {fetchAllUserPayment} from "../thunks/userPaymentThunks";

const UserPaymentSlice = createSlice({
    name: 'user-payment',
    initialState: {
        isLoading: false,
        isError: [],
        data: [],
        record: {},
        count: 0,
        page: 1
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchAllUserPayment.fulfilled, (state, action) => {
            state.data = action.payload.results;
        })
    }
});

export const UserPaymentReducer = UserPaymentSlice.reducer;
