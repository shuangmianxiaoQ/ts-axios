// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...

import { AxiosRequestConfig } from './types';
import xhr from './xhr';

const axios = (config: AxiosRequestConfig): void => {
  xhr(config);
};

export default axios;
