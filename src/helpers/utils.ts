/**
 * 判断值是否为日期类型
 */
const isDate = (val: any): val is Date => Object.prototype.toString.call(val) === '[object Date]';

/**
 * 判断值是否为对象
 */
const isObject = (val: any): val is Object => val === Object(val);

export { isDate, isObject };
