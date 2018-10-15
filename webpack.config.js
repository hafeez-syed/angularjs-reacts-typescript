const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	//entry: './src/react-components/index.tsx',
	entry: './src/app/app.ts',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './dist')
	},
	devtool: 'inline-source-map',
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.json']
	},
	module: {
		rules: [
			{ test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/ },
			{ test: /\.css$/, use: ['style-loader', 'css-loader'] },
			{ enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
		]
	},
	mode: 'development',
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: 'index.html'
		}),
		new webpack.ProvidePlugin({
			'React': 'react',
			'ReactDOM': 'react-dom',
		})
	]
};
