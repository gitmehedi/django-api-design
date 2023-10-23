import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {getApiURL} from "../utils/urls";

const fetchAllOrders = createAsyncThunk('orders/fetchAll', async (dispatch, thunkAPI) => {
    let url = getApiURL('orders');

    const response = await axios.get(url);
    try {
        return response.data;
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