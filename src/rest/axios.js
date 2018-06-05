import axios from 'axios';
import { BASE_URL, API_KEY } from '../common/Constants'

const instance = axios.create({
    baseURL: BASE_URL
});

instance.interceptors.request.use(config => {
    config.params = {
        api_key: API_KEY,
        ...config.params
    }
    return config;
}, error => Promise.reject(error));

export default instance;