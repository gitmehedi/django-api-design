import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {getApiURL} from "../utils/urls";

const fetchAllInventory = createAsyncThunk('inventory/fetchAllInventory', async (dispatch, thunkAPI) => {
    const url = getApiURL('inventory');

    const response = await axios(url);
    try {
        return response.data;
    } catch (e) {
        return e.message;
    }
});

const fetchInventory = createAsyncThunk('inventory/fetchInventory', async (id, thunkAPI) => {
    let url = getApiURL("inventory/" + id);

    const response = await axios.get(url);
    try {
        return response.data;
    } catch (e) {
        return e.message;
    }
});


const postInventory = createAsyncThunk('inventory/postInventory', async (data, thunkAPI) => {
    let url = getApiURL("inventory");

    const response = await axios.post(url, data);
    try {
        return response.data;
    } catch (e) {
        return e.message;
    }
});


const putInventory = createAsyncThunk('inventory/putInventory', async (data, thunkAPI) => {
    let {recId, record} = data;
    let url = getApiURL("inventory/" + recId);

    const response = await axios.put(url, record);
    try {
        return response.data;
    } catch (e) {
        return e.message;
    }
});

const deleteInventory = createAsyncThunk('inventory/deleteInventory', async (id, thunkAPI) => {
    let url = getApiURL("inventory/" + id);

    const response = await axios.delete(url);
    try {
        return id;
    } catch (e) {
        return e.message;
    }
});

export {fetchAllInventory, fetchInventory, postInventory, putInventory, deleteInventory};