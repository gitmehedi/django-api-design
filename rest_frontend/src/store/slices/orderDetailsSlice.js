import {createSlice} from "@reduxjs/toolkit";
import {fetchAllOrders} from "../thunks/orderDetailsThunks";

const OrderDetailsSlice = createSlice({
    name: 'orders',
    initialState: {
        data: [],
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchAllOrders.fulfilled, (state, action) => {
            state.data = action.payload;
        })
    }
});


export const OrderDetailsReducer = OrderDetailsSlice.reducer;