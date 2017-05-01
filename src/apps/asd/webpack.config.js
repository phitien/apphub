var webpack = require('webpack');
var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractTextPlugin = new ExtractTextPlugin('static/asd/zzz.css');
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
    contentBase: 'public/asd',
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
    filename: 'static/asd/zzz.js'
  },
  entry: [
    'webpack-dev-server/client?http://localhost:2000',
    'webpack/hot/only-dev-server',
    './apps/asd/index.js',
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    extractTextPlugin,
    new HtmlWebpackPlugin({
      filename: 'asd/asd.html',
      template: 'template/index.html'
    }),
    new CopyWebpackPlugin([
      { from: rootPath + '/src/static', to: rootPath + '/public/static' },
      { from: rootPath + '/src/apps/asd/mock', to: rootPath + '/public/static/asd/api' },
      { from: rootPath + '/src/apps/asd/static', to: rootPath + '/public/static/asd' },
      { from: rootPath + '/node_modules/material-design-icons/iconfont', to: rootPath + '/public/static/material' }
    ])
  ]
}
