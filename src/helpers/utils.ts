const isDate = (val: any): val is Date => Object.prototype.toString.call(val) === '[object Date]';

const isObject = (val: any): val is Object => val === Object(val);

export { isDate, isObject };
