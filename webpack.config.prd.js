const merge = require("webpack-merge");
const base = require("./webpack.config.js");
const webpack = require('webpack');
const dotenv = require("dotenv");
const env = dotenv.config({debug: true, path: '.env.prd'}).parsed;
const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
}, {});

module.exports = merge(base, {
    mode: 'production',
    plugins: [
        new webpack.DefinePlugin(envKeys)
    ]
})