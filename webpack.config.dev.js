var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

var config = require('./webpack.base.config.js');

config.devtool = 'cheap-module-eval-source-map';

// Use webpack dev server
config.entry = [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './static_src'
];

// override django's STATIC_URL for webpack bundles
config.output.publicPath = 'http://localhost:3000/static_dist';

// Add HotModuleReplacementPlugin and BundleTracker plugins
config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new BundleTracker({filename: './webpack-stats.json'})
]);

// Add a loader for JSX files with react-hot enabled
config.module.loaders.push(
    {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'static_src')
    }
);

module.exports = config;







