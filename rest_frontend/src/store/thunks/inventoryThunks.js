import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {getApiURL} from "../utils/urls";

const fetchAllInventory = createAsyncThunk('inventory/fetchAllInventory', async (dispatch, thunkAPI) => {
    const response = await axios({
        url: getApiURL('inventory'),
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.data;
});

const fetchInventory = createAsyncThunk('inventory/fetchInventory', async (id, thunkAPI) => {
    const response = await axios.get(getApiURL('inventory/') + id);
    try {
        return response.data;
    } catch (e) {
        return e.message;
    }
});


const postInventory = createAsyncThunk('inventory/postInventory', async (data, thunkAPI) => {
    const response = await axios.post(getApiURL('inventory'), data);
    try {
        return response.data;
    } catch (e) {
        return e.message;
    }
});


const putInventory = createAsyncThunk('inventory/putInventory', async (data, thunkAPI) => {
    const id = data['id'];
    const item = data
    const response = await axios.post(getApiURL('inventory/' + id), item);
    try {
        return response.data;
    } catch (e) {
        return e.message;
    }
});

const deleteInventory = createAsyncThunk('inventory/deleteInventory', async (id, thunkAPI) => {

    const response = await axios.delete(getApiURL('inventory/' + id));
    try {
        return id;
    } catch (e) {
        return e.message;
    }
});

export {fetchAllInventory, fetchInventory, postInventory, putInventory, deleteInventory};