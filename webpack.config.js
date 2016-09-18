'use strict';

var webpack = require('webpack');

module.exports = {
    entry: {
        app: './app/main.ts'
        // ,
        // testt: './frontendtest/testt.ts'
    },
    output: {
        path: './dist',
        filename: '[name].js'
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
        publicPath: '/dist',
        historyApiFallback: true,
        proxy: {
            '/api/*': {
                target: 'http://localhost:8080'
            }
        }
    }
};