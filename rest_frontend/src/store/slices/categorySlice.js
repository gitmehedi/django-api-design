import {createSlice} from '@reduxjs/toolkit';
import {delCategory, fetchAllCategory, fetchCategory, postCategory} from "../thunks/categoryThunks";

const CategorySlice = createSlice({
    name: 'categories',
    initialState: {
        isLoading: false,
        data: [],
        count: 0,
        next: '',
        previous: '',
        record: {},
        error: null,
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchAllCategory.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(fetchAllCategory.fulfilled, (state, action) => {
            state.data = action.payload.results;
            state.count = action.payload.count;
            state.next = action.payload.next;
            state.previous = action.payload.previous;
            state.isLoading = false;
            console.log(action.payload);
        })

        builder.addCase(postCategory.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(postCategory.fulfilled, (state, action) => {
            state.data.push(action.payload);
            state.isLoading = false;
        })

        builder.addCase(fetchCategory.pending, (state, action) => {
            state.record = {};
            state.isLoading = true;
        }).addCase(fetchCategory.fulfilled, (state, action) => {
            state.record = action.payload;
            state.isLoading = false;
        })

        builder.addCase(delCategory.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(delCategory.fulfilled, (state, action) => {
            if (!action.payload) {
                return
            }
            const recId = action.payload;
            state.data = state.data.filter(dt => dt.id !== recId);
            state.isLoading = false;
        })
    }
});

export const CategoryReducer = CategorySlice.reducer;