/**
 * 判断值是否为日期类型
 * 使用类型谓词 val is Date，使用时就不用再对参数 val 进行类型断言了
 */
const isDate = (val: any): val is Date => Object.prototype.toString.call(val) === '[object Date]';

/**
 * 判断值是否为简单对象
 */
const isPlainObject = (val: any): val is Object => !!val && typeof val === 'object' && val.constructor === Object;

export { isDate, isPlainObject };
