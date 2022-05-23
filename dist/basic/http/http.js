"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Http = void 0;
const axios_1 = require("axios");
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["Unauthorized"] = 401] = "Unauthorized";
    StatusCode[StatusCode["Forbidden"] = 403] = "Forbidden";
    StatusCode[StatusCode["TooManyRequests"] = 429] = "TooManyRequests";
    StatusCode[StatusCode["InternalServerError"] = 500] = "InternalServerError";
})(StatusCode || (StatusCode = {}));
const headers = {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Credentials": true,
    "X-Requested-With": "XMLHttpRequest"
};
// We can use the following function to inject the JWT token through an interceptor
// We get the `accessToken` from the localStorage that we set when we authenticate
const injectToken = (config) => {
    try {
        const token = localStorage.getItem("accessToken");
        if (token != null) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }
    catch (error) {
        throw new Error(error);
    }
};
class Http {
    constructor(baseURL) {
        this.instance = null;
        this.baseURL = baseURL;
    }
    get http() {
        return this.instance != null ? this.instance : this.initHttp();
    }
    initHttp() {
        const http = axios_1.default.create({
            // baseURL: "https://api.example.com",
            baseURL: this.baseURL,
            headers,
            withCredentials: true
        });
        http.interceptors.request.use(injectToken, (error) => Promise.reject(error));
        http.interceptors.response.use((response) => response, (error) => {
            const { response } = error;
            return this.handleError(response);
        });
        this.instance = http;
        return http;
    }
    request(config) {
        return this.http.request(config);
    }
    get(url, config) {
        return this.http.get(url, config);
    }
    post(url, data, config) {
        return this.http.post(url, data, config);
    }
    put(url, data, config) {
        return this.http.put(url, data, config);
    }
    delete(url, config) {
        return this.http.delete(url, config);
    }
    // Handle global app errors
    // We can handle generic app errors depending on the status code
    handleError(error) {
        const { status } = error;
        switch (status) {
            case StatusCode.InternalServerError: {
                // Handle InternalServerError
                break;
            }
            case StatusCode.Forbidden: {
                // Handle Forbidden
                break;
            }
            case StatusCode.Unauthorized: {
                // Handle Unauthorized
                break;
            }
            case StatusCode.TooManyRequests: {
                // Handle TooManyRequests
                break;
            }
        }
        return Promise.reject(error);
    }
}
exports.Http = Http;
