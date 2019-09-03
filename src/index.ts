// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...

import { AxiosRequestConfig } from './types';
import xhr from './xhr';
import { handleUrl } from './helpers/url';

/**
 * 将参数中的 URL 转换为发送请求时的 URL
 */
const transformUrl = ({ url, params }: AxiosRequestConfig): string => handleUrl(url, params);

/**
 * axios
 * @param config axios 请求配置参数
 */
const axios = (config: AxiosRequestConfig): void => {
  config.url = transformUrl(config);

  xhr(config);
};

export default axios;
