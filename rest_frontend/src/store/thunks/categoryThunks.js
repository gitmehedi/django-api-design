import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {getApiURL} from "src/store/utils/urls";


const fetchCategory = createAsyncThunk('category/fetchall', async (dispatch, thunkAPI) => {

    const response = await axios({
        url: getApiURL('categories'),
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    return response.data;
});

export {fetchCategory};