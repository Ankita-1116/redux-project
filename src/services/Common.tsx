
import axios from 'axios';

export const postCall = (url: any, data: any) => {
    return axios.post(url, data, {
        auth: {
            username: 'divesh',
            password: 'restapi'
        },
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
export const getCallByParamsInUrl = (url: any, data: any) => {
    let queryUrl = '';
    for (const i in data) {
        queryUrl = queryUrl + i + '=' + data[i] + '&';
    }
    return axios.get(url + '?' + queryUrl);
}
export const getCall = (url: any) => {
    return axios.get(url, {
        auth: {
            username: 'divesh',
            password: 'restapi'
        },
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
export const goToPage = (history: any, page: any) => {
    history.push({
        pathname: '/' + page
    });
}
