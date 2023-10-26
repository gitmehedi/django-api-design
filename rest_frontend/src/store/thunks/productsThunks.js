import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {getApiURL, getRecId} from 'src/store/utils/urls';

const RESOURCE = 'products';
const url = getApiURL(RESOURCE);

const fetchAllProduct = createAsyncThunk('products/fetchAllProduct', async (page_no, thunkAPI) => {
    let page_url = page_no ? url + '?page=' + page_no : url;

    const response = await axios.get(page_url);
    try {
        return {'page': parseInt(page_no), 'data': response.data}
    } catch (e) {
        return e.message;
    }
});

const postProduct = createAsyncThunk('products/postProduct', async (data, thunkAPI) => {
    let {record} = data;
    let url = getApiURL(RESOURCE);

    const response = await axios.post(url, record);
    try {
        return response.data;
    } catch (e) {
        return e.message;
    }
});

const fetchProduct = createAsyncThunk('products/fetchProduct', async (id, thunkAPI) => {
    let url = getApiURL(RESOURCE, id);

    const response = await axios.get(url);
    try {
        return response.data;
    } catch (e) {
        return e.message;
    }
});

const putProduct = createAsyncThunk('products/putProduct', async (data, thunkAPI) => {
    let {id, record} = data;
    let url = getApiURL(RESOURCE, id);

    const response = await axios.put(url, record);
    try {
        return response.data;
    } catch (e) {
        return e.message;
    }
});

const delProduct = createAsyncThunk('products/delProduct', async (id, thunkAPI) => {
    let url = getApiURL(RESOURCE, id);

    const response = await axios.delete(url);
    try {
        return id;
    } catch (e) {
        return e.message;
    }
});


export {fetchAllProduct, fetchProduct, postProduct, putProduct, delProduct};