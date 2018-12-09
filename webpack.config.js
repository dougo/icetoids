const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: { logLevel: 'warn' },
  resolve: { modules: ['src', 'node_modules'] },
  module: { rules: [{ test: /\.js$/, use: { loader: 'babel-loader' }, exclude: /node_modules/ }] },
  plugins: [new HtmlWebpackPlugin({ title: 'IceToids (Development)' })]
}
