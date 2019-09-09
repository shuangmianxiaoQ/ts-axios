import { AxiosRequestConfig } from './types';

/**
 * 原生 xhr 封装
 */
const xhr = (config: AxiosRequestConfig): void => {
  const { url, method = 'get', data = null, headers } = config;

  const request = new XMLHttpRequest();

  request.open(method.toLowerCase(), url, true);

  Object.keys(headers).forEach(name => {
    // 如果 data 为空时，不必设置 Content-Type 的 Header
    if (data === null && name.toLowerCase() === 'content-type') {
      delete headers[name];
    } else {
      request.setRequestHeader(name, headers[name]);
    }
  });

  request.send(data);
};

export default xhr;
