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

const changePassword = createAsyncThunk('auth/changePassword', async (record, thunkAPI) => {
    const RESOURCE = 'api/change_password';
    const url = getApiURL(baseUrl + RESOURCE);
    let method = 'put';
    let header = thunkAPI.getState().auth.data;

    const res = await sendAsync(url, method, header, record);
    return res.data;

})
const updateProfile = createAsyncThunk('auth/updateProfile', async (record, thunkAPI) => {
    const RESOURCE = 'api/update_profile';
    const url = getApiURL(baseUrl + RESOURCE);
    let method = 'put';
    let header = thunkAPI.getState().auth.data;

    const res = await sendAsync(url, method, header, record);
    return res.data;
})
const updateProfileImage = createAsyncThunk('auth/updateProfileImage', async (record, thunkAPI) => {
    const RESOURCE = 'api/profile_image';
    const url = getApiURL(baseUrl + RESOURCE);
    let method = 'put';
    let header = thunkAPI.getState().auth.data;
    let type = "multipart/form-data";

    const res = await sendAsync(url, method, header, record, type);
    return res.data;
})

const userProfile = createAsyncThunk('auth/userProfile', async (record, thunkAPI) => {
    const RESOURCE = 'api/profile';
    const url = getApiURL(baseUrl + RESOURCE);
    let method = 'get';
    let header = thunkAPI.getState().auth.data;

    const res = await sendAsync(url, method, header);
    return res.data;
})

export {checkAuthUser, logoutUser, registerUser, changePassword, userProfile, updateProfile, updateProfileImage};