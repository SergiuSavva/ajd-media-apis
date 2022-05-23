import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
declare class Http {
    private instance;
    private readonly baseURL;
    constructor(baseURL: string);
    private get http();
    initHttp(): AxiosInstance;
    request<T = any, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R>;
    get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
    post<T = any, R = AxiosResponse<T>>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R>;
    put<T = any, R = AxiosResponse<T>>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R>;
    delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
    private handleError;
}
export { Http };
