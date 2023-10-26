import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {getApiURL, getRecId} from 'src/store/utils/urls';


const RESOURCE = 'payments';
const url = getApiURL(RESOURCE);

const fetchAllPayment = createAsyncThunk('payments/fetchAllPayment', async (page_no, thunkAPI) => {
    let page_url = page_no ? url + '?page=' + page_no : url;

    const response = await axios.get(page_url);
    try {
        return {'page': parseInt(page_no), 'data': response.data}
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
    const url = getApiURL(RESOURCE, id);

    const response = await axios.get(url);
    try {
        return response.data;
    } catch (e) {
        return e.message;
    }
});

const putPayment = createAsyncThunk('payments/putPayment', async (data, thunkAPI) => {
    let {id, record} = data;
    const url = getApiURL(RESOURCE, id);

    const response = await axios.put(url, record);
    try {
        return response.data;
    } catch (e) {
        return e.message;
    }
});

const delPayment = createAsyncThunk('payments/delPayment', async (id, thunkAPI) => {
    const url = getApiURL(RESOURCE, id);

    const response = await axios.delete(url);
    try {
        return id;
    } catch (e) {
        return e.message;
    }
});


export {fetchAllPayment, postPayment, fetchPayment, putPayment, delPayment};