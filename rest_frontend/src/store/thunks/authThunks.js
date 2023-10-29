import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {getApiURL, getRecId, sendAsync} from "src/store/utils/urls";

const baseUrl = 'http://localhost:8000/';


const checkAuthUser = createAsyncThunk('auth/token', async (credential, thunkAPI) => {
    let url = baseUrl + 'api/token/';
    const response = await axios.post(url, credential);

    try {
        return response.data;
    } catch (e) {
        return e.message;
    }
});

const logoutUser = createAsyncThunk('auth/logout', async (credential, thunkAPI) => {

    let auth = thunkAPI.getState().auth.data;
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + auth.access
    }


    let credentials = {
        'access': auth.access,
        'refresh_token': auth.refresh
    }

    let url = baseUrl + 'api/logout/';
    const response = await axios.post(url, credentials, headers);

    try {
        return response.data;
    } catch (e) {
        return e.message;
    }
})

const registerUser = createAsyncThunk('auth/register', async (record, thunkAPI) => {
    const RESOURCE = 'api/register';
    const url = getApiURL(baseUrl + RESOURCE);

    const response = await axios.post(url, record);

    try {
        return response.data;
    } catch (e) {
        return e.message;
    }
})

export {checkAuthUser, logoutUser, registerUser};