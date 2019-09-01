import { AxiosRequestConfig } from './types';

const xhr = (config: AxiosRequestConfig): void => {
  const { url, method = 'get', data = null } = config;

  const request = new XMLHttpRequest();

  request.open(method.toLowerCase(), url, true);

  request.send(data);
};

export default xhr;
