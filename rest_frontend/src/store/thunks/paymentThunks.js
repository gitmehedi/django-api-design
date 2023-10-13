import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {getApiURL} from "../utils/urls";

const fetchAllPayments = createAsyncThunk('payment/fetchAll', async (dispatch, thunkAPI) => {
    const response = await axios({
        url: getApiURL('payments'),
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    return response.data;
});


export {fetchAllPayments};