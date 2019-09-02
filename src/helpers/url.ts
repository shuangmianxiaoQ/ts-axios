import { isDate, isObject } from './utils';

// 对于部分特殊字符 `@`, `:`, `$`, `,`, ` `, `[`, `]` 不进行 encode 处理
const encode = (val: string): string =>
  encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+') // 注意：空格会被转换为 `+`
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');

const handleUrl = (url: string, params?: any): string => {
  if (!params) {
    return url;
  }

  const parts: string[] = [];

  Object.entries(params).forEach(([key, value]) => {
    // 如果参数的对象值为空，则直接忽略，不拼接到 URL 上
    if (value === null || typeof value === 'undefined') {
      return;
    }

    let values: any[];

    if (Array.isArray(value)) {
      values = value;
      key += '[]';
    } else {
      values = [value as any];
    }

    values.forEach(val => {
      if (isDate(val)) {
        val = val.toISOString();
      }

      if (isObject(val)) {
        val = JSON.stringify(val);
      }

      parts.push(`${encode(key)}=${encode(val)}`);
    });

    const serializedParams = parts.join('&');

    if (serializedParams) {
      const markIndex = url.indexOf('#');

      if (markIndex > -1) {
        url = url.slice(0, markIndex);
      }

      url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
    }
  });

  return url;
};

export { handleUrl };
