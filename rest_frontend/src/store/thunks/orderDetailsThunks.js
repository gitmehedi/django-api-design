import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {getApiURL} from "../utils/urls";

const RESOURCE = 'orders';
const url = getApiURL(RESOURCE);
const fetchAllOrders = createAsyncThunk('orders/fetchAll', async (page_no, thunkAPI) => {
    let page_url = page_no ? url + '?page=' + page_no : url;

    const response = await axios.get(page_url);
    try {
        return {'page': parseInt(page_no), 'data': response.data}
    } catch (e) {
        return e.message;
    }
});

const fetchOrder = createAsyncThunk('orders/fetchOrder', async (id, thunkAPI) => {
    let url = getApiURL('orders/' + id);

    const response = await axios.get(url);
    try {
        return response.data;
    } catch (e) {
        return e.message;
    }
})


const postOrder = createAsyncThunk('orders/postOrder', async (data, thunkAPI) => {
    let url = getApiURL('orders');

    const response = await axios.post(url, data);
    try {
        return response.data;
    } catch (e) {
        return e.message;
    }
})

const putOrder = createAsyncThunk('orders/putOrder', async (data, thunkAPI) => {
    let {id, record} = data;
    let url = getApiURL('orders/' + id);

    const response = await axios.put(url, record);
    try {
        return response.data;
    } catch (e) {
        return e.message;
    }
})

const delOrder = createAsyncThunk('orders/delOrder', async (id, thunkAPI) => {
    let url = getApiURL('orders/' + id);

    const response = await axios.delete(url);
    try {
        return id;
    } catch (e) {
        return e.message;
    }
})

export {fetchAllOrders, fetchOrder, postOrder, putOrder, delOrder};