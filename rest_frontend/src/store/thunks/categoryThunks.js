import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {getApiURL} from "src/store/utils/urls";

const RESOURCE = 'categories';
const url = getApiURL(RESOURCE);
const fetchAllCategory = createAsyncThunk('category/fetchall', async (params, thunkAPI) => {
    let page_url;
    let {page, search} = params;

    if (page && search) {
        page_url = url + '?page=' + page + '&search=' + search;
    } else if (page) {
        page_url = url + '?page=' + page;
    } else if (search) {
        page_url = url + '?search=' + search;
    } else {
        page_url = url;
    }

    //
    //
    //     console.log('Page No---' + page_no);
    // console.log('Search---' + search);
    //
    // if (page_no) {
    //     if (search.length > 0) {
    //         page_url = url + '?page=' + page_no + '&search=' + search;
    //     }
    //     page_url = url + '?page=' + page_no;
    //
    // } else {
    //     page_url = url
    //     if (search.length > 0) {
    //         page_url = url + '?search=' + search;
    //     }
    //
    // }

    const response = await axios.get(page_url);
    try {
        return {'page': parseInt(page), 'data': response.data}
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