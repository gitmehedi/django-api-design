import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {getApiURL} from "../utils/urls";

const fetchAllDiscount = createAsyncThunk('discount/fetchAll', async (dispatch, thunkAPI) => {
    const res = await axios({
        url: getApiURL('discounts'),
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    return res.data;
});

export {fetchAllDiscount};