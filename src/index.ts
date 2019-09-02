// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...

import { AxiosRequestConfig } from './types';
import xhr from './xhr';
import { handleUrl } from './helpers/url';

const transformUrl = ({ url, params }: AxiosRequestConfig): string => handleUrl(url, params);

const axios = (config: AxiosRequestConfig): void => {
  config.url = transformUrl(config);

  xhr(config);
};

export default axios;
