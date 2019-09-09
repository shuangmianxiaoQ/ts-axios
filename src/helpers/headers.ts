import { isPlainObject } from './utils';

/**
 * 将`Header`属性名规范统一处理
 * @param headers 请求`Header`
 * @param normalizedName `Header`属性名
 */
const normalizeHeaderName = (headers: any, normalizedName: string): void => {
  if (!headers) return;

  Object.keys(headers).forEach(name => {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = headers[name];
      delete headers[name];
    }
  });
};

/**
 * 处理请求`Header`，设置`Content-Type`为`json`类型
 */
const processHeaders = (headers: any, data: any): any => {
  normalizeHeaderName(headers, 'Content-Type');

  if (isPlainObject(data)) {
    if (headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json;charset=utf-8';
    }
  }

  return headers;
};

export { processHeaders };
