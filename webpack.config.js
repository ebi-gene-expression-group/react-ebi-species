var webpack = require('webpack');
var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        speciesIcon: './index.js',
        demo: './html/demo.js',
        dependencies: ['react', 'react-dom']
    },

    output: {
        libraryTarget: 'var',
        library: '[name]',
        path: path.resolve(__dirname, 'html/dist'),
        filename: '[name].bundle.js',
        publicPath: 'html/dist/'
    },

    plugins: [
        new CleanWebpackPlugin(['html/dist'], {verbose: true, dry: false}),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'dependencies',
            filename: 'vendor.bundle.js',
            minChunks: Infinity     // Explicit definition-based split. Don’t put shared modules between main and demo entries in vendor.bundle.js
        })
    ],

    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel', query: {presets: ['es2015']}},
            {test: /\.jsx$/, loader: 'babel', query: {presets: ['es2015', 'react']}},
            {test: /demo.js$/, loader: 'expose?exposed'},
            {test: /\.css$/, loader: 'style-loader!css-loader'}
        ]
    }
};
