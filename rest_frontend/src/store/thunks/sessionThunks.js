import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {getApiURL} from "../utils/urls";

const fetchAllSessions = createAsyncThunk('sessions/fetchAll', async (dispatch, thunkAPI) => {
    const response = await axios({
        url: getApiURL('session'),
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    return response.data;
});

export {fetchAllSessions};