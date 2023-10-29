import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {getApiURL, sendAsync} from "src/store/utils/urls";

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
    const RESOURCE = 'api/logout';
    const url = getApiURL(baseUrl + RESOURCE);
    let method = 'post';
    let header = thunkAPI.getState().auth.data;


    const res = await sendAsync(url, method, header, header);
    return res.data;
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