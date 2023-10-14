import {createSlice} from '@reduxjs/toolkit';
import {fetchAllCategory, fetchCategory} from "../thunks/categoryThunks";

const CategorySlice = createSlice({
    name: 'categories',
    initialState: {
        data: [],
        record: {},
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchAllCategory.fulfilled, (state, action) => {
            state.data = action.payload;
        })
        builder.addCase(fetchCategory.fulfilled, (state, action) => {
            state.record = action.payload;
        })
    }
});

export const CategoryReducer = CategorySlice.reducer;