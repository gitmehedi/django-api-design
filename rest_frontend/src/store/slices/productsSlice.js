import {createSlice} from "@reduxjs/toolkit";
import {fetchAllProducts} from "../thunks/productsThunks";


const ProductsSlice = createSlice({
    name: 'products',
    initialState: {
        data: [],
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.data = action.payload;
        });
    }
});

export const ProductsReducer = ProductsSlice.reducer;