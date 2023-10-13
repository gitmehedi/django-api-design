import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {getApiURL} from "../utils/urls";

const fetchAllInventory = createAsyncThunk('inventory/fetchAll', async (dispatch, thunkAPI) => {
    const response = await axios({
        url: getApiURL('inventory'),
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.data;
});

export {fetchAllInventory};