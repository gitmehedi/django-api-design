import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {getApiURL, getRecId} from 'src/store/utils/urls';

const RESOURCE = 'session'
const url = getApiURL(RESOURCE);


const fetchAllSession = createAsyncThunk('sessions/fetchAllSession', async (dispatch, thunkAPI) => {

    const response = await axios.get(url);
    try {
        return response.data;
    } catch (e) {
        return e.message;
    }
});

const postSession = createAsyncThunk('sessions/postSession', async (data, thunkAPI) => {
    let {record} = data;
    console.log(data);

    const response = await axios.post(url, record);
    try {
        return response.data;
    } catch (e) {
        return e.message;
    }
});

const fetchSession = createAsyncThunk('sessions/fetchSession', async (id, thunkAPI) => {
    let url = getApiURL(RESOURCE, id)

    const response = await axios.get(url);
    try {
        return response.data;
    } catch (e) {
        return e.message;
    }
});

const putSession = createAsyncThunk('sessions/putSession', async (data, thunkAPI) => {
    let {id, record} = data;
    let url = getApiURL(RESOURCE, id)


    const response = await axios.put(url, record);
    try {
        return response.data;
    } catch (e) {
        return e.message;
    }
});

const delSession = createAsyncThunk('sessions/delSession', async (id, thunkAPI) => {
    let url = getApiURL(RESOURCE, id)

    const response = await axios.delete(url);
    try {
        return id;
    } catch (e) {
        return e.message;
    }
});


export {fetchAllSession, fetchSession, postSession, putSession, delSession};