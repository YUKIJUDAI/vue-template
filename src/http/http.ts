import axios from "axios";
import config from "@/config/config";

// 创建新http
const http = axios.create({
    baseURL: config.baseUrl,
    timeout: 10000,
    headers: { "Content-Type": "application/x-www-form-urlencoded;charset=utf-8" }
});

// 请求发送前数据处理
http.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        Promise.reject(error);
    }
);

// 请求发送后数据处理
http.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.reject(error);
    }
);

export default http;
