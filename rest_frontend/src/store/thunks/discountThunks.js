import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {getApiURL, getRecId} from 'src/store/utils/urls';

const RESOURCE = 'discounts';
const url = getApiURL(RESOURCE);


const fetchAllDiscount = createAsyncThunk('discounts/fetchAllDiscount', async (dispatch, thunkAPI) => {

    const response = await axios.get(url);
    try {
        return response.data;
    } catch (e) {
        return e.message;
    }
});

const postDiscount = createAsyncThunk('discounts/postDiscount', async (data, thunkAPI) => {
    let {record} = data;

    const response = await axios.post(url, record);
    try {
        return response.data;
    } catch (e) {
        return e.message;
    }
});

const fetchDiscount = createAsyncThunk('discounts/fetchDiscount', async (id, thunkAPI) => {
    const url = getApiURL(RESOURCE, id);

    const response = await axios.get(url);
    try {
        return response.data;
    } catch (e) {
        return e.message;
    }
});

const putDiscount = createAsyncThunk('discounts/putDiscount', async (data, thunkAPI) => {
    let {id, record} = data;
    const url = getApiURL(RESOURCE, id);

    const response = await axios.put(url, record);
    try {
        return response.data;
    } catch (e) {
        return e.message;
    }
});

const delDiscount = createAsyncThunk('discounts/delDiscount', async (id, thunkAPI) => {
    const url = getApiURL(RESOURCE, id);

    const response = await axios.delete(url);
    try {
        return id;
    } catch (e) {
        return e.message;
    }
});


export {fetchAllDiscount, postDiscount, fetchDiscount, putDiscount, delDiscount};