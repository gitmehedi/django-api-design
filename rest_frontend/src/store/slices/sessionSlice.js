import {createSlice} from "@reduxjs/toolkit";
import {fetchAllSessions} from "../thunks/sessionThunks";

const SessionSlice = createSlice({
    name: 'sessions',
    initialState: {
        data: [],
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchAllSessions.fulfilled, (state, action) => {
            state.data = action.payload;
        })
    }
});

export const SessionReducer = SessionSlice.reducer;