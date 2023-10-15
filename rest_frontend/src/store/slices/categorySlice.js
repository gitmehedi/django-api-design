import {createSlice} from '@reduxjs/toolkit';
import {fetchAllCategory, fetchCategory} from "../thunks/categoryThunks";

const CategorySlice = createSlice({
    name: 'categories',
    initialState: {
        isLoading: false,
        data: [],
        record: {},
        error: null,
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchAllCategory.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(fetchAllCategory.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        })
        builder.addCase(fetchCategory.pending, (state, action) => {
            state.record = {};
            state.isLoading = true;
        })
        builder.addCase(fetchCategory.fulfilled, (state, action) => {
            state.record = action.payload;
            state.isLoading = false;
        })
    }
});

export const CategoryReducer = CategorySlice.reducer;