import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {getApiURL} from "src/store/utils/urls";


const fetchAllCategory = createAsyncThunk('category/fetchall', async (dispatch, thunkAPI) => {
    console.log('Fetch All catgories');
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
    let recId = data['recId'];
    let record = data['data'];
    console.log(data);
    const response = await axios({
        url: getApiURL('categories/' + recId),
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        data: record
    });
    return response.data;
});

const delCategory = createAsyncThunk('category/delete', async (recId, thunkAPI) => {

    try {
        const response = await axios({
            url: getApiURL('categories/' + recId),
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (response.status)
            return recId;
    } catch (error) {
        return error.message;
    }

});

export {fetchAllCategory, fetchCategory, postCategory, putCategory, delCategory};