import { default as AxiosInstance, AxiosRequestConfig } from 'axios';
import { API_URL } from '../constants/urls';

const config: AxiosRequestConfig = {
  baseURL: API_URL,
};

export const axios = AxiosInstance.create(config);
