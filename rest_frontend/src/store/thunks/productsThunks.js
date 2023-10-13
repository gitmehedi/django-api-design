import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {getApiURL} from "../utils/urls";

const fetchAllProducts = createAsyncThunk('products/fetchAll', async (dispatch, thunkAPI) => {
    const response = await axios({
        url: getApiURL('products'),
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    return response.data;
});

export {fetchAllProducts};