import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {getApiURL, getRecId} from 'src/store/utils/urls';


const url = getApiURL('discounts');
const urlID = getApiURL('discounts', getRecId());


const fetchAllDiscount = createAsyncThunk('carts/fetchAllDiscount', async (dispatch, thunkAPI) => {

    const response = await axios.get(url);
    try {
        return response.data;
    } catch (e) {
        return e.message;
    }
});

const postDiscount = createAsyncThunk('carts/postDiscount', async (data, thunkAPI) => {
    let {record} = data;

    const response = await axios.post(url, record);
    try {
        return response.data;
    } catch (e) {
        return e.message;
    }
});

const fetchDiscount = createAsyncThunk('carts/fetchDiscount', async (id, thunkAPI) => {
    const response = await axios.get(urlID);
    try {
        return response.data;
    } catch (e) {
        return e.message;
    }
});

const putDiscount = createAsyncThunk('carts/putDiscount', async (data, thunkAPI) => {
    let {record} = data;
    const response = await axios.put(urlID, record);
    try {
        return response.data;
    } catch (e) {
        return e.message;
    }
});

const delDiscount = createAsyncThunk('carts/delDiscount', async (id, thunkAPI) => {
    const response = await axios.delete(url);
    try {
        return id;
    } catch (e) {
        return e.message;
    }
});


export {fetchAllDiscount, postDiscount, fetchDiscount, putDiscount, delDiscount};