import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {getApiURL, getRecId} from 'src/store/utils/urls';


const url = getApiURL('products');
const urlID = getApiURL('products', getRecId());


const fetchAllProduct = createAsyncThunk('products/fetchAllProduct', async (dispatch, thunkAPI) => {

    const response = await axios.get(url);
    try {
        return response.data;
    } catch (e) {
        return e.message;
    }
});

const postProduct = createAsyncThunk('products/postProduct', async (data, thunkAPI) => {
    let {record} = data;

    const response = await axios.post(url, record);
    try {
        return response.data;
    } catch (e) {
        return e.message;
    }
});

const fetchProduct = createAsyncThunk('products/fetchProduct', async (id, thunkAPI) => {
    const response = await axios.get(urlID);
    try {
        return response.data;
    } catch (e) {
        return e.message;
    }
});

const putProduct = createAsyncThunk('products/putProduct', async (data, thunkAPI) => {
    let {record} = data;
    const response = await axios.put(urlID, record);
    try {
        return response.data;
    } catch (e) {
        return e.message;
    }
});

const delProduct = createAsyncThunk('products/delProduct', async (id, thunkAPI) => {
    const response = await axios.delete(url);
    try {
        return id;
    } catch (e) {
        return e.message;
    }
});


export {fetchAllProduct, fetchProduct, postProduct, putProduct, delProduct};