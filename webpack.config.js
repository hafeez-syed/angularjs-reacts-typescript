const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
	entry: './app/app.ts',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './dist')
	},
	devtool: 'inline-source-map',
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
	},
	module: {
		rules: [
			//{ test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/ },
			{ test: /\.tsx?$/, loader: ['awesome-typescript-loader'] },
			{ test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.html$/i, loader: 'html-loader' },
			{ enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
		]
	},
	mode: 'development',
	plugins: [
        new CheckerPlugin(),
        new HtmlWebPackPlugin({
	        inject: true,
	        template: './index.html'
        }),
	]
};
