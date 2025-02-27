const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({ template: 'index.html' }),
    ],
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: ['@babel/plugin-transform-runtime', '@babel/transform-async-to-generator'],
                }
            },
            {
                test: /.(css|scss)$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.png|svg|jpg|gif$/,
                use: ['file-loader'],
            },

        ]
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'build'),
            publicPath: '/build'
        },
        port: 8080,
        compress: true,
        hot: true,
        liveReload: true,
        historyApiFallback: true, // fall back to entry path every time it loads for react router
        proxy: {
            '/': 'http://localhost:3000'
        }
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx'],
    },
};