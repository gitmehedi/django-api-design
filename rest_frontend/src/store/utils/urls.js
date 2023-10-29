import axios from "axios";

const BASE_URL = 'http://localhost:8000/';
const REST_URL = 'http://localhost:8000/rest/';


const getApiURL = (resource, id = null) => {
    let url = resource + '/'
    if (id)
        url = url + id + '/';
    return url;
}

const getRecId = () => {
    let urlParts = window.location.pathname.split('/');
    if (urlParts.length > 0) {
        let id = urlParts[urlParts.length - 1];
        return parseInt(id);
    }
    return '';
}

const getAuthRequestHeader = (data) => {
    let {access, refresh} = data;

    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + access
    }

    return headers;
}


const getQueryStr = (path, page, search) => {
    let page_url;
    if (page && search) {
        page_url = '?page=' + page + '&search=' + search;
    } else if (page) {
        page_url = '?page=' + page;
    } else if (search) {
        page_url = '?search=' + search;
    } else {
        page_url = '';
    }
    return path + page_url;
}

const sendAsync = async (url, method, header, data = {}) => {
    console.log('---after----', url, '---', method, '---', header, '---', data);

    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + header.access
    }

    const response = await axios({
        baseURL: REST_URL,
        url: url,
        method: method,
        data: data,
        headers: headers
    }).then(res => {
        return res;
    }).catch(error => {
        if (error.response.status === 401 || error.response.status == 400) {
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            localStorage.removeItem('loggedIn');
            window.location.href = '/login/';
        }
    });

    try {
        return response;
    } catch (e) {
        return false;
    }
}


export {REST_URL, BASE_URL, getApiURL, getRecId, getAuthRequestHeader, sendAsync, getQueryStr};