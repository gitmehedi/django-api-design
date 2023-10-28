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
        page: 1,
        search: ''
    },
    reducers: {
        setSearch(state, action) {
            state.search = action.payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchAllUserPayment.fulfilled, (state, action) => {
            state.data = action.payload.results;
        })
    }
});

export const {setSearch} = UserPaymentSlice.actions;
export const UserPaymentReducer = UserPaymentSlice.reducer;
