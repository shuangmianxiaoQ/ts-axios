// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...

import { AxiosRequestConfig } from './types';
import xhr from './xhr';
import { handleUrl } from './helpers/url';
import { transformRequest } from './helpers/data';
import { processHeaders } from './helpers/headers';

/**
 * 处理请求时配置，使得正确发送请求
 */
const processConfig = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const { url, params, data, headers = {} } = config;

  config.url = handleUrl(url, params);
  // 处理 header 时依赖了 data，所以在处理请求 body 前处理 header
  config.headers = processHeaders(headers, data);
  config.data = transformRequest(data);

  return config;
};

/**
 * axios
 * @param config axios 请求配置参数
 */
const axios = (config: AxiosRequestConfig): void => {
  config = processConfig(config);
  xhr(config);
};

export default axios;
