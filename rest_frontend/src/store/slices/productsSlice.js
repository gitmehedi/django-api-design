import {createSlice} from "@reduxjs/toolkit";
import {fetchAllProduct, fetchProduct, postProduct, putProduct, delProduct} from "../thunks/productsThunks";


const ProductsSlice = createSlice({
    name: 'products',
    initialState: {
        isLoading: false,
        isError: [],
        data: [],
        record: {},
        count: 0
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchAllProduct.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(fetchAllProduct.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        })

        builder.addCase(fetchProduct.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(fetchProduct.fulfilled, (state, action) => {
            state.record = action.payload;
            state.isLoading = false;
        })

        builder.addCase(postProduct.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(postProduct.fulfilled, (state, action) => {
            state.data = [...action.payload, ...state.data];
            state.isLoading = false;
        })

        builder.addCase(putProduct.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(putProduct.fulfilled, (state, action) => {
            let item = action.payload;
            state.data = state.data.map(dt => (dt.id === item.id) ? item : dt);
            state.isLoading = false;
        })

        builder.addCase(delProduct.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(delProduct.fulfilled, (state, action) => {
            state.data = state.data.filter(dt => dt !== action.payload);
            state.isLoading = false;
        })
    }
});

export const ProductsReducer = ProductsSlice.reducer;