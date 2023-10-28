import {createAsyncThunk} from "@reduxjs/toolkit";
import {getApiURL, sendAsync, getQueryStr} from "src/store/utils/urls";

const RESOURCE = 'categories';
const fetchAllCategory = createAsyncThunk('category/fetchall', async (params, thunkAPI) => {
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

const fetchCategory = createAsyncThunk('category/fetch', async (id, thunkAPI) => {
    const url = getApiURL(RESOURCE, id);
    let method = 'get';
    let header = thunkAPI.getState().auth.data;

    const res = await sendAsync(url, method, header);
    return res.data;
});

const postCategory = createAsyncThunk('category/post', async (data, thunkAPI) => {
    const {record} = data;
    const url = getApiURL(RESOURCE);
    let method = 'post';
    let header = thunkAPI.getState().auth.data;

    const res = await sendAsync(url, method, header, record);
    return res.data;
});

const putCategory = createAsyncThunk('category/put', async (data, thunkAPI) => {
    const {id, record} = data;
    const url = getApiURL(RESOURCE, id);
    let method = 'put';
    let header = thunkAPI.getState().auth.data;

    const res = await sendAsync(url, method, header, record);
    return res.data;
});

const delCategory = createAsyncThunk('category/delete', async (id, thunkAPI) => {
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

export {fetchAllCategory, fetchCategory, postCategory, putCategory, delCategory};