import {createSlice} from "@reduxjs/toolkit";
import {fetchAllDiscount} from "../thunks/discountThunks";

const DiscountSlice = createSlice({
    name: 'discount',
    initialState: {
        data: [],
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchAllDiscount.fulfilled, (state, action) => {
            state.data = action.payload;
        })
    }

})
export const DiscountReducer = DiscountSlice.reducer;