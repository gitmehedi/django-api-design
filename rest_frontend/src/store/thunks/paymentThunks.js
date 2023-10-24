import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {getApiURL, getRecId} from 'src/store/utils/urls';


const url = getApiURL('payments');
const url = getApiURL('payments', getRecId());


const fetchAllPayment = createAsyncThunk('payments/fetchAllPayment', async (dispatch, thunkAPI) => {

    const response = await axios.get(url);
    try {
        return response.data;
    } catch (e) {
        return e.message;
    }
});

const postPayment = createAsyncThunk('payments/postPayment', async (data, thunkAPI) => {
    let {record} = data;

    const response = await axios.post(url, record);
    try {
        return response.data;
    } catch (e) {
        return e.message;
    }
});

const fetchPayment = createAsyncThunk('payments/fetchPayment', async (id, thunkAPI) => {
    const response = await axios.get(url);
    try {
        return response.data;
    } catch (e) {
        return e.message;
    }
});

const putPayment = createAsyncThunk('payments/putPayment', async (data, thunkAPI) => {
    let {record} = data;
    const response = await axios.put(url, record);
    try {
        return response.data;
    } catch (e) {
        return e.message;
    }
});

const delPayment = createAsyncThunk('payments/delPayment', async (id, thunkAPI) => {
    const response = await axios.delete(url);
    try {
        return id;
    } catch (e) {
        return e.message;
    }
});


export {fetchAllPayment, postPayment, fetchPayment, putPayment, delPayment};