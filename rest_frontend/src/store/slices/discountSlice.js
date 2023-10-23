import {createSlice} from "@reduxjs/toolkit";
import {fetchAllDiscount, postDiscount, fetchDiscount, putDiscount, delDiscount} from "../thunks/discountThunks";

const DiscountSlice = createSlice({
    name: 'discount',
    initialState: {
        isLoading: false,
        isError: [],
        data: [],
        record: {},
        count: 0
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchAllDiscount.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(fetchAllDiscount.fulfilled, (state, action) => {
            state.data = action.payload;
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
            state.data = state.data.filter(dt => dt !== action.payload);
            state.isLoading = false;
        })
    }

})
export const DiscountReducer = DiscountSlice.reducer;