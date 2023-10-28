import {createAsyncThunk} from "@reduxjs/toolkit";
import {getApiURL, getQueryStr, sendAsync} from "src/store/utils/urls";

const RESOURCE = 'inventory';
const fetchAllInventory = createAsyncThunk('inventory/fetchAllInventory', async (params, thunkAPI) => {
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

const fetchInventory = createAsyncThunk('inventory/fetchInventory', async (id, thunkAPI) => {
    const url = getApiURL(RESOURCE, id);
    let method = 'get';
    let header = thunkAPI.getState().auth.data;

    const res = await sendAsync(url, method, header);
    return res.data;
});


const postInventory = createAsyncThunk('inventory/postInventory', async (data, thunkAPI) => {
    const {record} = data;
    const url = getApiURL(RESOURCE);
    let method = 'post';
    let header = thunkAPI.getState().auth.data;

    const res = await sendAsync(url, method, header, record);
    return res.data;
});


const putInventory = createAsyncThunk('inventory/putInventory', async (data, thunkAPI) => {
    const {id, record} = data;
    const url = getApiURL(RESOURCE, id);
    let method = 'put';
    let header = thunkAPI.getState().auth.data;

    const res = await sendAsync(url, method, header, record);
    return res.data;
});

const deleteInventory = createAsyncThunk('inventory/deleteInventory', async (id, thunkAPI) => {
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

export {fetchAllInventory, fetchInventory, postInventory, putInventory, deleteInventory};