import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {getApiURL, getRecId} from "src/store/utils/urls";

const RESOURCE = 'api/token/';
const baseUrl = 'http://localhost:8000/';


const checkAuthUser = createAsyncThunk('auth/token', async (credential, thunkAPI) => {
    let url = baseUrl + RESOURCE;
    const response = await axios.post(url, credential);

    try {
        return response.data;
    } catch (e) {
        return e.message;
    }
});

const logoutUser = createAsyncThunk('auth/logout', async (credential, thunkAPI) => {

    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + thunkAPI.getState().auth.data.access
    }

    let url = baseUrl + 'rest/logout/';
    const response = await axios.post(url, credential, headers);

    try {
        return response.data;
    } catch (e) {
        return e.message;
    }
})

export {checkAuthUser, logoutUser};