var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './src/main.ts',
    output: {
        path: __dirname  + "/dist",
        filename: "jui-angular.js"
    },
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ],
        noParse: [ path.join(__dirname, 'node_modules', 'angular2', 'bundles') ]
    },
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true
    }
};
