const path = require('path');
const MyPlugin = require('./plugin/my-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: path.resolve(__dirname, './loader/clear-console-loader.js'),
            options: {
              author: 'William',
              data: new Date()
            }
          },
          {
            loader: path.resolve(__dirname , './loader/add-authorinfo-loader.js')
          }
        ]
      }
    ]
  },
  plugins: [new MyPlugin({ a: 1 , b: 2})]
};
