import {createSlice} from '@reduxjs/toolkit';
import {fetchCategory} from "../thunks/categoryThunks";

const CategorySlice = createSlice({
    name: 'categories',
    initialState: {
        data: [],
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchCategory.fulfilled, (state, action) => {
            state.data = action.payload;
        })
    }
});

export const CategoryReducer = CategorySlice.reducer;