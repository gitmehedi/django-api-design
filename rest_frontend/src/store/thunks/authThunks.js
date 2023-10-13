import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "src/store/utils/urls";

const URL = 'http://localhost:8000/'
const fetchAuthUser = createAsyncThunk('auth/token', async (credential, thunkAPI) => {
    const response = await axios({
        url: BASE_URL + ''
    });
});