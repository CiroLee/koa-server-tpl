import axios, { AxiosRequestConfig } from 'axios';
import { ERROR_CODE } from './errorCode';

const request = <T = unknown>(config: AxiosRequestConfig): Promise<T> => {
  return new Promise((resolve, reject) => {
    axios(config).then(res => {
      if (res.status === ERROR_CODE.requestSuccess.code) {
        resolve(res.data);
      } else {
        reject(res.data);
      }
    });
  });
};

export default request;
