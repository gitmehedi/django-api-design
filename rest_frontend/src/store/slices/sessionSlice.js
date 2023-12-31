import {createSlice} from "@reduxjs/toolkit";
import {fetchAllSession, fetchSession, postSession, putSession, delSession} from "../thunks/sessionThunks";

const SessionSlice = createSlice({
    name: 'sessions',
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
        builder.addCase(fetchAllSession.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(fetchAllSession.fulfilled, (state, action) => {
            let data = action.payload.data;

            state.page = action.payload.page ? action.payload.page : 1;
            state.data = data.results;
            state.count = data.count;
            state.next = data.next;
            state.previous = data.previous;
            state.isLoading = false;
        })

        builder.addCase(fetchSession.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(fetchSession.fulfilled, (state, action) => {
            state.record = action.payload;
            state.isLoading = false;
        })

        builder.addCase(postSession.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(postSession.fulfilled, (state, action) => {
            state.data = [...action.payload, ...state.data];
            state.isLoading = false;
        })

        builder.addCase(putSession.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(putSession.fulfilled, (state, action) => {
            let item = action.payload;
            state.data = state.data.map(dt => (dt.id === item.id) ? item : dt);
            state.isLoading = false;
        })

        builder.addCase(delSession.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(delSession.fulfilled, (state, action) => {
            state.data = state.data.filter(dt => dt.id !== action.payload);
            state.isLoading = false;
        })
    }
});

export const {setSearch} = SessionSlice.actions;
export const SessionReducer = SessionSlice.reducer;