import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {getApiURL, getRecId} from 'src/store/utils/urls';


const RESOURCE = 'carts';
const url = getApiURL(RESOURCE);


const fetchAllCart = createAsyncThunk('carts/fetchAllCart', async (dispatch, thunkAPI) => {

    const response = await axios.get(url);
    try {
        return response.data;
    } catch (e) {
        return e.message;
    }
});

const postCart = createAsyncThunk('carts/postCart', async (data, thunkAPI) => {
    let {record} = data;

    const response = await axios.post(url, record);
    try {
        return response.data;
    } catch (e) {
        return e.message;
    }
});

const fetchCart = createAsyncThunk('carts/fetchCart', async (id, thunkAPI) => {
    let url = getApiURL(RESOURCE, id)

    const response = await axios.get(url);
    try {
        return response.data;
    } catch (e) {
        return e.message;
    }
});

const putCart = createAsyncThunk('carts/putCart', async (data, thunkAPI) => {
    let {id, record} = data;
    let url = getApiURL(RESOURCE, id);

    const response = await axios.put(url, record);
    try {
        return response.data;
    } catch (e) {
        return e.message;
    }
});

const delCart = createAsyncThunk('carts/delCart', async (id, thunkAPI) => {
    let url = getApiURL(RESOURCE, id)

    const response = await axios.delete(url);
    try {
        return id;
    } catch (e) {
        return e.message;
    }
});


export {fetchAllCart, fetchCart, postCart, putCart, delCart};