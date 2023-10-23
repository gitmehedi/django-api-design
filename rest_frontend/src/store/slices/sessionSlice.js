import {createSlice} from "@reduxjs/toolkit";
import {fetchAllSession, fetchSession, postSession, putSession, delSession} from "../thunks/sessionThunks";

const SessionSlice = createSlice({
    name: 'sessions',
    initialState: {
        isLoading: false,
        isError: [],
        data: [],
        record: {},
        count: 0
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchAllSession.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(fetchAllSession.fulfilled, (state, action) => {
            state.data = action.payload;
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
            state.data = state.data.filter(dt => dt !== action.payload);
            state.isLoading = false;
        })
    }
});

export const SessionReducer = SessionSlice.reducer;