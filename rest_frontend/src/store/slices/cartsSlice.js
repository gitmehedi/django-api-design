import {createSlice} from "@reduxjs/toolkit";
import {fetchAllCart, fetchCart, postCart, putCart, delCart} from "src/store/thunks/cartsThunks";

const CartsSlice = createSlice({
    name: 'carts',
    initialState: {
        isLoading: false,
        isError: [],
        data: [],
        record: {},
        count: 0
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchAllCart.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(fetchAllCart.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        })

        builder.addCase(fetchCart.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(fetchCart.fulfilled, (state, action) => {
            state.record = action.payload;
            state.isLoading = false;
        })

        builder.addCase(postCart.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(postCart.fulfilled, (state, action) => {
            state.data = [...action.payload, ...state.data];
            state.isLoading = false;
        })

        builder.addCase(putCart.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(putCart.fulfilled, (state, action) => {
            let item = action.payload;
            state.data = state.data.map(dt => (dt.id === item.id) ? item : dt);
            state.isLoading = false;
        })

        builder.addCase(delCart.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(delCart.fulfilled, (state, action) => {
            state.data = state.data.filter(dt => dt !== action.payload);
            state.isLoading = false;
        })

    }
});

export const CartsReducer = CartsSlice.reducer;