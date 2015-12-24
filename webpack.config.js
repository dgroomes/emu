'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        'vendor': './app/vendor.ts',
        'app': './app/boot.ts' // our angular app
    },
    // Config for our build files
    output: {
        path: root('__build__'),
        filename: '[name].js',
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js'
    },
    module: {
        loaders: [
            // Support for .ts files.
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                query: {
                    'ignoreDiagnostics': [
                        2403, // 2403 -> Subsequent variable declarations
                        2300, // 2300 -> Duplicate identifier
                        2374, // 2374 -> Duplicate number index signature
                        2375  // 2375 -> Duplicate string index signature
                    ]
                },
                exclude: [ /\.(spec|e2e)\.ts$/, /node_modules\/(?!(ng2-.+))/ ]
            },

            // Support for *.json files.
            { test: /\.json$/,  loader: 'json-loader' },

            // Support for CSS as raw text
            { test: /\.css$/,   loader: 'raw-loader' },

            // support for .html as raw text
            { test: /\.html$/,  loader: 'raw-loader' },
        ],
        noParse: [ /.+zone\.js\/dist\/.+/, /.+angular2\/bundles\/.+/ ]
    },
    resolve: {
        // ensure loader extensions match
        extensions: ['','.ts','.js','.json', '.css', '.html']
    },
    //plugins: [
    //    new HtmlWebpackPlugin({template: './index.html'})
    //],
    devtool: 'inline-source-map',
    //devServer: {
    //    contentBase: './dist'
    //},
    //plugins: [
    //    new CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js', minChunks: Infinity }),
    //    new CommonsChunkPlugin({ name: 'common', filename: 'common.js', minChunks: 2, chunks: ['app', 'vendor'] })
    //    // include uglify in production
    //],
    // our Webpack Development Server config
    devServer: {
        //historyApiFallback: true,
        contentBase: './',
        publicPath: '/__build__'
        //contentBase: './__build__'
    }
};


// Helper functions

function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [__dirname].concat(args));
}

function rootNode(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return root.apply(path, ['node_modules'].concat(args));
}