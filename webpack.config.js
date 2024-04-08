const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './main.js',
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot)$/,
                generator: {
                    filename: './src/assets/fonts/[name][ext]',
                },
            },
            {
                test: /\.(png)$/,
                generator: {
                    filename: './src/assets/images/main/[name][ext]',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
        new CopyPlugin({
            patterns: [
                {from: "./src", to: "src"},
            ],
        }),
    ],
};