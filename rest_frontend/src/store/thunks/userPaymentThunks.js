import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {getApiURL} from "../utils/urls";

const fetchAllUserPayment = createAsyncThunk('user-payments/fetchAll', async (dispatch, thunkAPI) => {
    const response = await axios({
        url: getApiURL('user-payment'),
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    return response.data;
})
export {fetchAllUserPayment};