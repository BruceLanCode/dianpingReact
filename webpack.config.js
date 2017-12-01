/**
 * Created by lantu on 2017/11/23.
 */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: path.resolve(__dirname,'app/index.jsx'),
    output: {
        path: __dirname + '/build',
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js','.jsx']
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },{
            test: /\.css$/,
            exclude: /node_modules/,
            use: [{
                loader: 'style-loader'
            },{
                loader: 'css-loader'
            },{
                loader: 'postcss-loader'
            }]
        },{
            test: /\.less$/,
            exclude: /node_modules/,
            use: [{
                loader: 'style-loader'
            },{
                loader: 'css-loader'
            },{
                loader: 'postcss-loader'
            },{
                loader: 'less-loader'
            }]
        },{
            test: /\.(png|gif|jpg|jpeg|bmp)$/i,
            loader: 'url-loader',
            options: {
                limit: 5000
            }
        },{
            test:/\.(woff|woff2|svg|ttf|eot)$/i,
            loader: 'url-loader',
            options: {
                limit: 5000
            }
        }]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.tmpl.html'
        }),

        new webpack.HotModuleReplacementPlugin(),

        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV === 'dev') || 'false'))
        })
    ],

    devServer: {
        proxy: {
            '/api': 'http://localhost:3000'
        },
        hot: true,
        historyApiFallback: true
    }
};