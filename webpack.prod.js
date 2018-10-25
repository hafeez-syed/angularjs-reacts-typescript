const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { CheckerPlugin } = require('awesome-typescript-loader');

/*module.exports = {
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
};*/
module.exports = [
    createModuleConfig('amd'),
    createModuleConfig('commonjs2'),
    createModuleConfig('umd'),
    createModuleConfig('var'),
    createModuleConfig('window'),
    createModuleConfig('this'),
];


function createModuleConfig(target) {
    return {
        entry: './app/index.ts',
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
        },
        module: {
            rules: [
                { test: /\.less$/, loader: ['style-loader', 'css-loader'], exclude: /node_modules/},
                { test: /\.tsx?$/, loader: ['awesome-typescript-loader'], exclude: /node_modules/ },
                { test: /\.jsx?$/, loader: ['babel-loader'], exclude: /node_modules/, enforce: 'pre' }
            ]
        },
        plugins: [
            new CleanWebpackPlugin(['dist']),
            new CheckerPlugin(),
            new webpack.ProvidePlugin({
                'React': 'react',
                'ReactDOM': 'react-dom',
            })
        ],
        optimization: {
            minimize: false
        },
        externals: {
            'React': 'react',
            'ReactDOM': 'react-dom'
        },
        output: {
            path: path.resolve(__dirname, './dist/'),
            filename: 'ng-host.' + target + '.js',
            library: 'ngHost',
            libraryTarget: target
        },
        mode: 'production',
        name: target
    };
}
