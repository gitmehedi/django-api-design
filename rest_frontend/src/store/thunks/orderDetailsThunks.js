import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {getApiURL} from "../utils/urls";

const fetchAllOrders = createAsyncThunk('orders/fetchAll', async (dispatch, thunkAPI) => {
    const response = await axios({
        url: getApiURL('orders'),
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    return response.data;
});

export {fetchAllOrders};