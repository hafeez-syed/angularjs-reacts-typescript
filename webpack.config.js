const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
	entry: './app/index.ts',
	output: {
		filename: 'nghost.js',
		path: path.resolve(__dirname, './dist')
	},
	devtool: 'inline-source-map',
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
	},
	module: {
		rules: [
			{ test: /\.tsx?$/, loader: ['awesome-typescript-loader'], exclude: /node_modules/ },
			{ test: /\.css$/, use: ['style-loader', 'css-loader'], exclude: /node_modules/ },
            { test: /\.html$/i, loader: 'html-loader', exclude: /node_modules/ },
            { test: /\.(js|jsx)$/, loader: ['babel-loader'], exclude: /node_modules/, enforce: 'pre' }
        ]
	},
	mode: 'development',
	plugins: [
        new CheckerPlugin(),
		new webpack.ProvidePlugin({
			'React': 'react',
			'ReactDOM': 'react-dom',
		}),
        new HtmlWebPackPlugin({
	        inject: true,
	        template: './index.html'
        }),
	],
    optimization: {
        minimize: false
    }
};
