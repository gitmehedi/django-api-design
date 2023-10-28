import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {getApiURL, getQueryStr, getRecId, sendAsync} from 'src/store/utils/urls';

const RESOURCE = 'products';

const fetchAllProduct = createAsyncThunk('products/fetchAllProduct', async (params, thunkAPI) => {
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

const postProduct = createAsyncThunk('products/postProduct', async (data, thunkAPI) => {
    const {record} = data;
    const url = getApiURL(RESOURCE);
    let method = 'post';
    let header = thunkAPI.getState().auth.data;

    const res = await sendAsync(url, method, header, record);
    return res.data;
});

const fetchProduct = createAsyncThunk('products/fetchProduct', async (id, thunkAPI) => {
    const url = getApiURL(RESOURCE, id);
    let method = 'get';
    let header = thunkAPI.getState().auth.data;

    const res = await sendAsync(url, method, header);
    return res.data;
});

const putProduct = createAsyncThunk('products/putProduct', async (data, thunkAPI) => {
    const {id, record} = data;
    const url = getApiURL(RESOURCE, id);
    let method = 'put';
    let header = thunkAPI.getState().auth.data;

    const res = await sendAsync(url, method, header, record);
    return res.data;
});

const delProduct = createAsyncThunk('products/delProduct', async (id, thunkAPI) => {
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


export {fetchAllProduct, fetchProduct, postProduct, putProduct, delProduct};