const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const bodyParser = require('body-parser');
const webpackConfig = require('./webpack.config');
const router = require('./router');

const app = express();
const compiler = webpack(webpackConfig);

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: '/build/',
    stats: {
      colors: true,
      chunks: false // 减少控制台冗长的输出
    }
  })
);

app.use(webpackHotMiddleware(compiler));

// 设置静态资源目录
app.use(express.static(__dirname + '/public'));

// 解析请求 body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}, Ctrl+C to stop`);
});
