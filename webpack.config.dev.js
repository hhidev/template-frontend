const path = require('path');
const merge = require("webpack-merge");
const base = require("./webpack.config.js");
const webpack = require('webpack');
const dotenv = require("dotenv");
const env = dotenv.config({debug: true, path: '.env.dev'}).parsed;
const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
}, {});

module.exports = merge(base, {
    mode: "development",
    devtool: "source-map",
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: "index.js",
    },
    devServer: {
      historyApiFallback: true,
      contentBase: "dist",
      port: 9090,
      inline: true,
      hot: true,
      host: "0.0.0.0"
    },
    plugins: [
      new webpack.DefinePlugin(envKeys)
    ]
});
