const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
	entry: './app/index.ts',
	output: {
		filename: 'nghost.js',
		path: path.resolve(__dirname, './dist')
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
	},
	module: {
		rules: [
			{ test: /\.tsx?$/, loader: ['awesome-typescript-loader'] },
			{ test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.html$/i, loader: 'html-loader' },
            { test: /\.(js|jsx)$/, loader: ['babel-loader'], exclude: /node_modules/, enforce: 'pre' },
        ]
	},
	mode: 'production',
	plugins: [
        new CleanWebpackPlugin(['dist']),
        new CheckerPlugin(),
		new webpack.ProvidePlugin({
			'React': 'react',
			'ReactDOM': 'react-dom',
		})
	],
    optimization: {
        minimize: true
    }
};
