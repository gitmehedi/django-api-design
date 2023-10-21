import {createSlice} from "@reduxjs/toolkit";
import {
    fetchAllInventory,
    fetchInventory,
    postInventory,
    putInventory,
    deleteInventory
} from "../thunks/inventoryThunks";

const InventorySlice = createSlice({
    name: 'inventory',
    initialState: {
        isLoading: false,
        errors: null,
        data: [],
        count:0,
        record: {}
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchAllInventory.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(fetchAllInventory.fulfilled, (state, action) => {
            state.data = action.payload.results;
            state.isLoading = false;
        })

        builder.addCase(fetchInventory.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(fetchInventory.fulfilled, (state, action) => {
            state.record = action.payload;
            state.isLoading = false;
        })

        builder.addCase(postInventory.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(postInventory.fulfilled, (state, action) => {
            state.data.push(action.payload);
            state.isLoading = false;
        })

        builder.addCase(putInventory.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(putInventory.fulfilled, (state, action) => {
            const item = action.payload;
            const items = state.data.map(dt => (dt.id === item.id) ? item : dt);

            state.data = items;
            state.record = item;
            state.isLoading = false;
        })

        builder.addCase(deleteInventory.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(deleteInventory.fulfilled, (state, action) => {
            const id = action.payload;
            const items = state.data.filter(dt => dt.id !== id);

            state.data = items;
            state.isLoading = false;
            console.log(items);
        })
    }
});

export const InventoryReducer = InventorySlice.reducer;