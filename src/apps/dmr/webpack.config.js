var webpack = require('webpack');
var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractTextPlugin = new ExtractTextPlugin('dmr/app.css');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var rootPath = __dirname + '/../../..';

module.exports = {
    devtool: '#source-map',//'#inline-source-map',
    context: rootPath + '/src',
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['babel-loader']
        },{
            test: /\.scss$/,
            loader: extractTextPlugin.extract(['css-loader', 'sass-loader']),
        }],
    },
    devServer:{
        contentBase: 'public'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        path: rootPath + '/public',
        publicPath: `/public`,
        filename: 'dmr/app.js'
    },
    externals: {
        'jquery': 'jQuery',
    },
    entry: [
        'webpack-dev-server/client?http://localhost:9000/public/dmr',
        'webpack/hot/only-dev-server',
        './apps/dmr/entry.jsx',
    ],
    plugins: [
        new webpack.ProvidePlugin({$: 'jquery', jQuery: 'jquery', 'window.jQuery': 'jquery'}),
        new webpack.HotModuleReplacementPlugin(),
        extractTextPlugin,
        new HtmlWebpackPlugin({
            filename: 'dmr/index.html',
            template: 'template/index.html'
        }),
        new CopyWebpackPlugin([
            { from: rootPath + '/src/static', to: rootPath + '/public/static' },
            { from: rootPath + '/node_modules/patternfly/dist', to: rootPath + '/public/patternfly' }
        ])
    ]
}
