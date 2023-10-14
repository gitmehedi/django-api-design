import {createSlice} from "@reduxjs/toolkit";
import {fetchAllCarts} from "src/store/thunks/cartsThunks";

const CartsSlice = createSlice({
    name: 'carts',
    initialState: {
        data: [],
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchAllCarts.fulfilled, (state, action) => {
            state.data = action.payload;
        })
    }
});

export const CartsReducer = CartsSlice.reducer;