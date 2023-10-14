const BASE_URL = 'http://localhost:8000/';
const REST_URL = 'http://localhost:8000/rest/';

const getApiURL = (resource) => {
    const url = REST_URL + resource + '/';
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

export {REST_URL, BASE_URL, getApiURL, getRecId};