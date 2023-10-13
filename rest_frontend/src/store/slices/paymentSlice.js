import {createSlice} from "@reduxjs/toolkit";
import {fetchAllPayments} from "../thunks/paymentThunks";

const PaymentSlice = createSlice({
    name: 'payments',
    initialState: {
        data: [],
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchAllPayments.fulfilled, (state, action) => {
            state.data = action.payload;
        })
    }

});
export const PaymentReducer = PaymentSlice.reducer;