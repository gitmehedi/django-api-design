import {createSlice} from "@reduxjs/toolkit";
import {fetchAllInventory} from "../thunks/inventoryThunks";

const InventorySlice = createSlice({
    name: 'inventory',
    initialState: {
        data: [],
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchAllInventory.fulfilled, (state, action) => {
            state.data = action.payload;
        })
    }
});

export const InventoryReducer = InventorySlice.reducer;