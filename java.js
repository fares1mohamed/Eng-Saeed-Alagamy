import axios from 'axios';

import { API_URL, API, TOKEN } from '../constants';
import Cookie from 'js-cookie';

const axiosInstance = axios.create({
    baseURL:
        process.env.NODE_ENV === 'development' ? `${API}api` : `${API}api`,
    responseType: 'json'
});

axiosInstance.interceptors.request.use((config) => {
    const token = window.localStorage.getItem('token')
    const authorizedConfig = { ...config };
    if (token) {
        authorizedConfig.headers.Authorization = `Bearer ${token}`;
        authorizedConfig.headers['Content-Type'] = 'application/json;charset=utf-8'
    }
    return config;
});


export default axiosInstance;
