var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app: ['babel-polyfill', path.join(__dirname, 'app', 'main.js')],
        vendor: ['jquery','react', 'react-dom']
    },
    output: {
        path: path.join(__dirname, 'dist', 'static'),
        filename: 'main.js',
        publicPath: path.join(__dirname, 'dist', 'static', '/')
    },
    resolve: {
        extensions: [
            '',
            '.js',
            '.json',
            '.css',
            'jsonp'
        ]
    },
    module: {
        loaders: [
            {
                test: /\.(css|scss|sass)$/,
                loader: ExtractTextPlugin.extract('css!sass')
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                plugins: ['transform-runtime'],
                query: {
                    presets: ['es2015', 'stage-0', 'react']
                }
            },
            {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                loader: 'url-loader'
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loader: 'url?limit=10000!img?progressive=true'
            }
        ]
    },
    plugins: [
        // Avoid publishing files when compilation fails
        //new webpack.NoErrorsPlugin(),
        //new webpack.optimize.UglifyJsPlugin({
        //    compress: {
        //        warnings: false
        //    }
        //}),
        new ExtractTextPlugin('../style/style.css', {
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map'
};