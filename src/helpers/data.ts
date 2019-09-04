import { isPlainObject } from './utils';

/**
 * 处理请求 body 数据
 */
const transformRequest = (data: any): any => (isPlainObject(data) ? JSON.stringify(data) : data);

export { transformRequest };
