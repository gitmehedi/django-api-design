import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {getApiURL, getRecId} from 'src/store/utils/urls';


const url = getApiURL('discounts');
const urlID = getApiURL('discounts', getRecId());


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
    const response = await axios.get(urlID);
    try {
        return response.data;
    } catch (e) {
        return e.message;
    }
});

const putDiscount = createAsyncThunk('discounts/putDiscount', async (data, thunkAPI) => {
    let {record} = data;
    const response = await axios.put(urlID, record);
    try {
        return response.data;
    } catch (e) {
        return e.message;
    }
});

const delDiscount = createAsyncThunk('discounts/delDiscount', async (id, thunkAPI) => {
    const response = await axios.delete(url);
    try {
        return id;
    } catch (e) {
        return e.message;
    }
});


export {fetchAllDiscount, postDiscount, fetchDiscount, putDiscount, delDiscount};