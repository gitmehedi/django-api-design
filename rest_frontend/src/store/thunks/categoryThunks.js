import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {getApiURL} from "src/store/utils/urls";


const fetchAllCategory = createAsyncThunk('category/fetchall', async (dispatch, thunkAPI) => {
    const response = await axios({
        url: getApiURL('categories'),
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    return response.data;
});

const fetchCategory = createAsyncThunk('category/fetch', async (recId, thunkAPI) => {
    const response = await axios({
        url: getApiURL('categories/' + recId),
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    return response.data;
});

const postCategory = createAsyncThunk('category/post', async (data, thunkAPI) => {
    const response = await axios({
        url: getApiURL('categories'),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: data
    });
    return response.data;
});

const putCategory = createAsyncThunk('category/put', async (data, thunkAPI) => {
    const response = await axios({
        url: getApiURL('categories'),
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        data: data
    });
    return response.data;
});

export {fetchAllCategory, fetchCategory, postCategory, putCategory};