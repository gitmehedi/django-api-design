import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {getApiURL, getRecId} from "src/store/utils/urls";

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

export {checkAuthUser, logoutUser};