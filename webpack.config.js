const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Uglify = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000,
  },
  resolve: {
    extensions: ['.js', '.css', '.scss', '.png', '.jpg', '.gif'],
  },
  module: {
    loaders: [
      { test: /\.s?css$/, loader: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(png|jpg|gif)$/, loader: 'url-loader' },
      { test: /\.js$/, use: { loader: 'babel-loader', options: { presets: ['env'] } } },
      { test: /\.html$/, use: { loader: 'raw-loader' } },
    ],
  },
  plugins: [
    new Uglify(),
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/index.html',
      path: path.join(__dirname, 'dist'),
      filename: 'index.html',
    }),
  ],
};
