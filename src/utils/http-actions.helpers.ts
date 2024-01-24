import fetchApi from '@/utils/api.utils';
import { type AxiosRequestConfig } from 'axios';

interface FuncProp<T> {
  url: string;
  payload: T;
  config?: AxiosRequestConfig;
}

export const postRequest = async <T, R>({ url, payload }: FuncProp<T>) => {
  const response = await fetchApi.post<R>(url, payload);

  const { data } = response;

  return data;
};

export const getRequest = async <R>({ url }: { url: string }) => {
  const response = await fetchApi.get<R>(url);

  const { data } = response;

  return data;
};

interface WithParams {
  url: string;
  params: number;
}

export const getRequestWithParams = async <R>({
  url,
  params,
}: WithParams): Promise<R> => {
  const response = await fetchApi.get<R>(url, { params });

  const { data } = response;

  return data;
};
