const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/',
	},
  mode: 'development',
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			'@components': path.resolve(__dirname, 'src/components/'),
			'@containers': path.resolve(__dirname, 'src/containers/'),
			'@pages': path.resolve(__dirname, 'src/pages/'),
			'@hooks': path.resolve(__dirname, 'src/hooks/'),
			'@routes': path.resolve(__dirname, 'src/routes/'),
			'@styles': path.resolve(__dirname, 'src/styles/'),
			'@context': path.resolve(__dirname, 'src/context/'),
			'@icons': path.resolve(__dirname, 'src/assets/icons/'),
			'@logos': path.resolve(__dirname, 'src/assets/logos/'),
		}
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
						"style-loader",
						"css-loader",
						"sass-loader"
			]
		},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			},
			{
				test: /\.(png|jpg|svg|jpeg|webp)$/,
	/*aquí en test agregas la expresión regular para procesar los diferentes tipos de imagenes que tengas.*/
				type: 'asset',
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css'
    }),
	],
	devServer: {
		historyApiFallback: true,
	}
}
