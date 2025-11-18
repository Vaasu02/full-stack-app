import axios from 'axios';

const API = axios.create({
    baseURL: 'http://34.14.212.189:5000/api',
});

export default API;
