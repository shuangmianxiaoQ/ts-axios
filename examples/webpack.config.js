const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',

  /**
   * 多页面应用，多入口配置
   * 把每个子目录下创建的 app.ts 作为 webpack 构建的入口文件
   * entries 对象的 key 为目录名，并为每个入口引入了用于热更新的文件
   *
   * {
   *   simple: ['webpack-hot-middleware/client', './simple/app.ts'],
   *   base: ['webpack-hot-middleware/client', './base/app.ts']
   * }
   */
  entry: fs.readdirSync(__dirname).reduce((entries, dir) => {
    const fullDir = path.join(__dirname, dir);
    const entry = path.join(fullDir, 'app.ts');

    // 读取文件状态判断是否为文件夹，并判断组合的路径是否真实存在
    if (fs.statSync(fullDir).isDirectory() && fs.existsSync(entry)) {
      entries[dir] = ['webpack-hot-middleware/client', entry];
    }

    return entries;
  }, {}),

  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    publicPath: '/build/'
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: 'pre',
        use: ['tslint-loader']
      },
      {
        test: /\.tsx?$/, // 注意正则，匹配'.ts'和'.tsx'后缀
        use: [
          {
            loader: 'ts-loader',
            options: { transpileOnly: true }
          }
        ]
      }
    ]
  },

  resolve: {
    alias: {
      Axios: path.resolve(__dirname, '../src/index.ts')
    },
    extensions: ['.ts', '.tsx', '.js']
  },

  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()]
};
