import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {getApiURL} from "src/store/utils/urls";


const fetchAllCategory = createAsyncThunk('category/fetchall', async (page_no, thunkAPI) => {
    const url = getApiURL('categories');

    let page_url = page_no ? url + '?page=' + page_no : url;

    const response = await axios.get(page_url);
    try {
        return {'page': parseInt(page_no), 'data': response.data}
    } catch (e) {
        return e.message;
    }
});

const fetchCategory = createAsyncThunk('category/fetch', async (id, thunkAPI) => {
    const url = getApiURL('categories' + id);

    const response = await axios.get(url);
    try {
        return response.data;
    } catch (e) {
        return e.message;
    }
});

const postCategory = createAsyncThunk('category/post', async (data, thunkAPI) => {
    const {record} = data;
    const url = getApiURL('categories');

    const response = await axios.post(url, record);
    try {
        return response.data;
    } catch (e) {
        return e.message;
    }
});

const putCategory = createAsyncThunk('category/put', async (data, thunkAPI) => {
    let recId = data['recId'];
    let record = data['data'];

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