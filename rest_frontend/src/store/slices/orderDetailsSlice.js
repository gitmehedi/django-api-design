import {createSlice} from "@reduxjs/toolkit";
import {fetchAllOrders, fetchOrder, postOrder, putOrder, delOrder} from "../thunks/orderDetailsThunks";

const OrderDetailsSlice = createSlice({
    name: 'orders',
    initialState: {
        isLoading: true,
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
        builder.addCase(fetchAllOrders.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(fetchAllOrders.fulfilled, (state, action) => {
            let data = action.payload.data;

            state.page = action.payload.page ? action.payload.page : 1;
            state.data = data.results;
            state.count = data.count;
            state.next = data.next;
            state.previous = data.previous;
            state.isLoading = false;
        })

        builder.addCase(fetchOrder.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(fetchOrder.fulfilled, (state, action) => {
            state.record = action.payload;
            state.isLoading = false;
        })

        builder.addCase(postOrder.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(postOrder.fulfilled, (state, action) => {
            state.data = [...action.payload, ...state.data];
            state.isLoading = false;
        })

        builder.addCase(putOrder.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(putOrder.fulfilled, (state, action) => {
            let item = action.payload;
            state.data = state.data.map(dt => (dt.id === item.id) ? item : dt);
            state.isLoading = false;
        })

        builder.addCase(delOrder.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(delOrder.fulfilled, (state, action) => {
            state.data = state.data.filter(dt => dt.id !== action.payload);
            state.isLoading = false;
        })

    }
});

export const {setSearch} = OrderDetailsSlice.actions;
export const OrderDetailsReducer = OrderDetailsSlice.reducer;