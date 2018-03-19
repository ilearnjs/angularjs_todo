const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		angular: `${__dirname}/bundles/angular.js`,
		app: `${__dirname}/bundles/app.js`,
	},

	output: {
		path: `${__dirname}/dist`,
		filename: '[name].js',
		publicPath: '/',
	},

	module: {
		rules: [
			{ test: /\.html$/, loader: "html-loader" },
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: `${__dirname}/src/index.html`
		}),
	],

	devServer: {
		contentBase: `${__dirname}/dist`,
	},

	devtool: 'source-map'
};