const BASE_URL = 'http://localhost:8000/';
const REST_URL = 'http://localhost:8000/rest/';

const getApiURL = (resource) => {
    const url = REST_URL + resource + '/';
    return url;
}



export {REST_URL, BASE_URL, getApiURL};