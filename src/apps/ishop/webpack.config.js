var webpack = require('webpack');
var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractTextPlugin = new ExtractTextPlugin('static/ishop/zzz.css');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var rootPath = __dirname + '/../../..';

module.exports = {
  devtool: '#source-map',//'#inline-source-map',
  context: rootPath + '/src',
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loaders: ['babel-loader']
    },{
      test: /\.scss$/,
      loader: extractTextPlugin.extract(['css-loader', 'sass-loader']),
    }],
  },
  devServer: {
    port: 2000,
    contentBase: 'public/ishop',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    },
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js']
  },
  output: {
    path: rootPath + '/public',
    publicPath: '/',
    filename: 'static/ishop/zzz.js'
  },
  entry: [
    'webpack-dev-server/client?http://localhost:2000',
    'webpack/hot/only-dev-server',
    './apps/ishop/index.js',
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    extractTextPlugin,
    new HtmlWebpackPlugin({
      filename: 'ishop/ishop.html',
      template: 'template/index.html'
    }),
    new CopyWebpackPlugin([
      { from: rootPath + '/src/static', to: rootPath + '/public/static' },
      { from: rootPath + '/src/apps/ishop/mock', to: rootPath + '/public/static/ishop/api' },
      { from: rootPath + '/src/apps/ishop/static', to: rootPath + '/public/static/ishop' },
      { from: rootPath + '/node_modules/material-design-icons/iconfont', to: rootPath + '/public/static/material' }
    ])
  ]
}
