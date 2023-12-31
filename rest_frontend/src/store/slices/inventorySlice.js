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
        count: 0,
        record: {},
        page: 1,
        search: ''
    },
    reducers: {
        setSearch(state, action) {
            state.search = action.payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchAllInventory.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(fetchAllInventory.fulfilled, (state, action) => {
            let data = action.payload.data;

            state.page = action.payload.page ? action.payload.page : 1;
            state.data = data.results;
            state.count = data.count;
            state.next = data.next;
            state.previous = data.previous;
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
            state.data = [...action.payload, ...state.data];
            state.isLoading = false;
        })

        builder.addCase(putInventory.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(putInventory.fulfilled, (state, action) => {
            let item = action.payload;
            state.data = state.data.map(dt => (dt.id === item.id) ? item : dt);
            state.isLoading = false;
        })

        builder.addCase(deleteInventory.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(deleteInventory.fulfilled, (state, action) => {
            if (!action.payload) {
                return
            }
            state.data = state.data.filter(dt => dt.id !== action.payload);
            state.isLoading = false;
        })
    }
});

export const {setSearch} = InventorySlice.actions;
export const InventoryReducer = InventorySlice.reducer;