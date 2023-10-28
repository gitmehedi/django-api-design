import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {getApiURL, getQueryStr, getRecId, sendAsync} from 'src/store/utils/urls';

const RESOURCE = 'discounts';
const fetchAllDiscount = createAsyncThunk('discounts/fetchAllDiscount', async (params, thunkAPI) => {
    let method = 'get';
    let header = thunkAPI.getState().auth.data;
    let {page, search} = params;
    let url = getQueryStr(RESOURCE, page, search);

    const response = await sendAsync(url, method, header);
    try {
        return {'page': parseInt(page), 'data': response.data, 'status': response.status}
    } catch (e) {
        return e.message;
    }
});

const postDiscount = createAsyncThunk('discounts/postDiscount', async (data, thunkAPI) => {
    let {record} = data;

    const response = await axios.post(url, record);
    try {
        return response.data;
    } catch (e) {
        return e.message;
    }
});

const fetchDiscount = createAsyncThunk('discounts/fetchDiscount', async (id, thunkAPI) => {
    const url = getApiURL(RESOURCE, id);
    let method = 'get';
    let header = thunkAPI.getState().auth.data;

    const res = await sendAsync(url, method, header);
    return res.data;
});

const putDiscount = createAsyncThunk('discounts/putDiscount', async (data, thunkAPI) => {
    const {id, record} = data;
    const url = getApiURL(RESOURCE, id);
    let method = 'put';
    let header = thunkAPI.getState().auth.data;

    const res = await sendAsync(url, method, header, record);
    return res.data;
});

const delDiscount = createAsyncThunk('discounts/delDiscount', async (id, thunkAPI) => {
    const url = getApiURL(RESOURCE, id);
    let method = 'delete';
    let header = thunkAPI.getState().auth.data;

    const res = await sendAsync(url, method, header);
    if (res.status === 204) {
        return id;
    } else {
        return false;
    }
});


export {fetchAllDiscount, postDiscount, fetchDiscount, putDiscount, delDiscount};