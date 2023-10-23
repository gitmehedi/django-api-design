import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {getApiURL} from 'src/store/utils/urls';

const fetchAllCarts = createAsyncThunk('carts/fetchall', async (dispatch, thunkAPI) => {

    const response = await axios({
        url: getApiURL('carts'),
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    return response.data;
});

export {fetchAllCarts};