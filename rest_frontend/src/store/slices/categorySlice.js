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
        error: [],
        page: 1,
        search: ''
    },
    reducers: {
        setSearch(state, action) {
            state.search = action.payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchAllCategory.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(fetchAllCategory.fulfilled, (state, action) => {
            let data = action.payload.data;

            state.page = action.payload.page ? action.payload.page : 1;
            state.data = data.results;
            state.count = data.count;
            state.next = data.next;
            state.previous = data.previous;
            state.isLoading = false;
        })

        builder.addCase(postCategory.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(postCategory.fulfilled, (state, action) => {
            state.data = [...action.payload, ...state.data];
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
            state.data = state.data.filter(dt => dt.id !== action.payload);
            state.isLoading = false;
        })
    }
});

export const {setSearch} = CategorySlice.actions;
export const CategoryReducer = CategorySlice.reducer;