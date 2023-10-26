import {createSlice} from "@reduxjs/toolkit";
import {fetchAllDiscount, postDiscount, fetchDiscount, putDiscount, delDiscount} from "../thunks/discountThunks";

const DiscountSlice = createSlice({
    name: 'discount',
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
        builder.addCase(fetchAllDiscount.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(fetchAllDiscount.fulfilled, (state, action) => {
            let data = action.payload.data;

            state.page = action.payload.page ? action.payload.page : 1;
            state.data = data.results;
            state.count = data.count;
            state.next = data.next;
            state.previous = data.previous;
            state.isLoading = false;
        })

        builder.addCase(fetchDiscount.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(fetchDiscount.fulfilled, (state, action) => {
            state.record = action.payload;
            state.isLoading = false;
        })

        builder.addCase(postDiscount.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(postDiscount.fulfilled, (state, action) => {
            state.data = [...action.payload, ...state.data];
            state.isLoading = false;
        })

        builder.addCase(putDiscount.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(putDiscount.fulfilled, (state, action) => {
            let item = action.payload;
            state.data = state.data.map(dt => (dt.id === item.id) ? item : dt);
            state.isLoading = false;
        })

        builder.addCase(delDiscount.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(delDiscount.fulfilled, (state, action) => {
            state.data = state.data.filter(dt => dt.id !== action.payload);
            state.isLoading = false;
        })
    }

})
export const DiscountReducer = DiscountSlice.reducer;