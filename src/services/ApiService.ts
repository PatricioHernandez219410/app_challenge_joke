import axios from 'axios';

export const errorHandler = (error: any, next = null) => {
    if (error.code != "ERR_NETWORK" ) {
        return { error: error.response?.data || true };
    }
}

export const controller = new AbortController();

export default (params: any = null) => {
    let options = {
        baseURL: import.meta.env.VITE_BASE_URL_API,
        signal: controller.signal
    }
    params && (options = { ...options, ...params })
    let instance = axios.create(options)
    return instance
}

export interface Error {
    msg?: string;
    param?: any;
    key?: string;
    location?: string;
}

export interface RequestError {
    errors: Error[];
}