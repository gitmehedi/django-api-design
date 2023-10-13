import {createSlice} from "@reduxjs/toolkit";
import {fetchAllUserPayment} from "../thunks/userPaymentThunks";

const UserPaymentSlice = createSlice({
    name: 'user-payment',
    initialState: {
        data: [],
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchAllUserPayment.fulfilled, (state, action) => {
            state.data = action.payload;
        })
    }
});

export const UserPaymentReducer = UserPaymentSlice.reducer;
