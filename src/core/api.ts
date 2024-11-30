import axios, { } from 'axios';
import { API_URL } from './environment';

export const API =  axios.create({
    baseURL: API_URL,

});

axios.interceptors.response.use(async response => {
    console.log(response, 'response');
    return response;
})