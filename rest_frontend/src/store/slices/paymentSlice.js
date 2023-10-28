import {createSlice} from "@reduxjs/toolkit";
import {fetchAllPayment, postPayment, fetchPayment, putPayment, delPayment} from "../thunks/paymentThunks";


const PaymentSlice = createSlice({
    name: 'payments',
    initialState: {
        isLoading: false,
        isError: [],
        data: [],
        record: {},
        count: 0,
        page: 1,
        search: ''
    },
    reducers: {
        setSearch(state, action) {
            state.search = action.payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchAllPayment.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(fetchAllPayment.fulfilled, (state, action) => {
            let data = action.payload.data;

            state.page = action.payload.page ? action.payload.page : 1;
            state.data = data.results;
            state.count = data.count;
            state.next = data.next;
            state.previous = data.previous;
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
            state.data = state.data.filter(dt => dt.id !== action.payload);
            state.isLoading = false;
        })
    }

});

export const {setSearch} = PaymentSlice.actions;
export const PaymentReducer = PaymentSlice.reducer;