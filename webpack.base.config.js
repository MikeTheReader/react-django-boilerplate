var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: [
        './src'
    ],
    output: {
        path: path.join(__dirname, 'static_dist'),
        filename: 'bundle.js',
    },
    plugins: [],
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ] // add all common loaders here
    },
    resolve: {
        modulesDirectories: ['node_modules', 'bower_components'],
        extensions: ['', '.js', '.jsx']
    },
};
