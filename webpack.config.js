const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[hash].js",
        chunkFilename: "[hash].js",
    },
    module: {
        rules: [
            {
                loader: 'ts-loader',
                test: /\.tsx?$/,
                exclude: [
                    /node_modules/
                ],
                options: {
                    configFile: 'tsconfig.json'
                }
            },
            {
                test: /\.(png|jpg|gif)$/i,
                loader: 'url-loader',
                options: {
                    name: '[name].[ext]'
                }
            },
            {
                test: /\.(svg)$/i,
                loader: '@svgr/webpack',
                options: {
                    icon: true
                }
            },
            {
                test: /\.css/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: { url: false }
                    }
                ]
            },
            {
                test: /\.less$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true
                        }
                    }
                ],
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
        alias: {
            components: path.resolve(__dirname, './src/components'),
            store: path.resolve(__dirname, './src/store'),
            images: path.resolve(__dirname, './src/assets/images'),
        }          
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./public/index.html",
            favicon: "./public/favicon.ico"
        }),
        new HardSourceWebpackPlugin(),
        new CopyPlugin([
            {from: "./public/manifest.json", to: 'manifest.json'}
        ])
    ]
}