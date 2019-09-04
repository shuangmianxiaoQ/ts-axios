import axios from '../../src';

// 请求 URL: `/base/get?a=1&b=2`
// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     a: 1,
//     b: 2
//   }
// });

// 参数值为数组，请求 URL: `/base/get?foo[]=bar&foo[]=baz`
// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: ['bar', 'baz']
//   }
// });

// 参数值为对象，请求 URL: `/base/get?foo=%7B%22bar%22:%22baz%22%7D`
// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: {
//       bar: 'baz'
//     }
//   }
// });

// 参数值为 Date 类型，请求 URL: `/base/get?date=2019-09-03T01:55:23.415Z`
// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     date: new Date()
//   }
// });

// 特殊字符支持，请求 URL: `/base/get?foo=@:$+`
// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: '@:$, '
//   }
// });

// 空值忽略，请求 URL: `/base/get?foo=bar`
// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: 'bar',
//     baz: null
//   }
// });

// 丢弃 url 中的哈希标记，请求 URL: `/base/get?foo=bar`
// axios({
//   method: 'get',
//   url: '/base/get#hash',
//   params: {
//     foo: 'bar'
//   }
// });

// 保留 url 中已存在的参数请求 URL: `/base/get?foo=bar&bar=baz`
// axios({
//   method: 'get',
//   url: '/base/get?foo=bar',
//   params: {
//     bar: 'baz'
//   }
// });

/**
 * 分割线
 */

axios({
  method: 'POST',
  url: '/base/post',
  data: {
    a: 1,
    b: 2
  }
});

const arr = new Int32Array([21, 31]);

axios({
  method: 'post',
  url: '/base/buffer',
  data: arr
});
