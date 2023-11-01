import {createSlice} from "@reduxjs/toolkit";
import {fetchAllCart, fetchCart, postCart, putCart, delCart} from "src/store/thunks/cartsThunks";

const CartsSlice = createSlice({
    name: 'carts',
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
        builder.addCase(fetchAllCart.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(fetchAllCart.fulfilled, (state, action) => {
            let data = action.payload.data;

            state.page = action.payload.page ? action.payload.page : 1;
            state.data = data.results;
            state.count = data.count;
            state.next = data.next;
            state.previous = data.previous;
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
            state.data = state.data.filter(dt => dt.id !== action.payload);
            state.isLoading = false;
        })

    }
});

export const CartsReducer = CartsSlice.reducer;