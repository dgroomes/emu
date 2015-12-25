'use strict';

var webpack = require('webpack');

module.exports = {
    entry: './app/bootstrap.ts',
    output: {
        path: './dist',
        filename: 'app.js'
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: ['','.ts','.js']
    },
    devServer: {
        contentBase: './',
        publicPath: '/dist'
    }
};