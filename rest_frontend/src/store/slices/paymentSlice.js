import {createSlice} from "@reduxjs/toolkit";
import {fetchAllPayment, postPayment, fetchPayment, putPayment, delPayment} from "../thunks/paymentThunks";


const PaymentSlice = createSlice({
    name: 'payments',
    initialState: {
        isLoading: false,
        isError: [],
        data: [],
        record: {},
        count: 0
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchAllPayment.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(fetchAllPayment.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        })

        builder.addCase(fetchPayment.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(fetchPayment.fulfilled, (state, action) => {
            state.record = action.payload;
            state.isLoading = false;
        })

        builder.addCase(postPayment.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(postPayment.fulfilled, (state, action) => {
            state.data = [...action.payload, ...state.data];
            state.isLoading = false;
        })

        builder.addCase(putPayment.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(putPayment.fulfilled, (state, action) => {
            let item = action.payload;
            state.data = state.data.map(dt => (dt.id === item.id) ? item : dt);
            state.isLoading = false;
        })

        builder.addCase(delPayment.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(delPayment.fulfilled, (state, action) => {
            state.data = state.data.filter(dt => dt !== action.payload);
            state.isLoading = false;
        })
    }

});
export const PaymentReducer = PaymentSlice.reducer;