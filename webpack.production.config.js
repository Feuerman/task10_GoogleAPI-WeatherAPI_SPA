"use strict";
var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	resolve: {
		extensions: ["", ".js", ".jsx", ".scss"]
	},
	entry: {
		app: ["./src/index.jsx", "./src/style.scss"]
	},
	output: {
		path: path.join(__dirname, 'public'),
		publicPath: '/public/',
		filename: "bundle.js",
		sourceMapFilename: "[file].map"
	},
	module: {
		loaders: loaders
	},
	plugins: [
		new CopyWebpackPlugin([
			{from: './src/index.html'}
		]),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new ExtractTextPlugin('style.css')
	]
};
