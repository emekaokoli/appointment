import { API_URL } from '@/constants/basePath';
import { authUtils } from '@/utils/auth.util';
import axios, { type InternalAxiosRequestConfig } from 'axios';

const { getToken, isAuthenticated } = authUtils;

const api = axios.create({
  baseURL: API_URL,
});

const token = getToken();

api.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    if (isAuthenticated()) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  async (error) => await Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => await Promise.reject(error)
);

export default api;
