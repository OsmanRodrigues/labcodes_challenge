var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
var ExtractText = require('extract-text-webpack-plugin');


module.exports = {
  entry: [
    './project/assets/src/js/index'
  ],
  output: {
      path: path.resolve('./project/assets/bundles/'),
      filename: "[name]-[hash].js",
      publicPath: '/static/bundles/', // Tell django to use this URL to load packages and not use STATIC_URL + bundle_name
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ExtractText.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
    ],
  },
  plugins: [
    new BundleTracker({
      path: __dirname,
      filename: 'project/webpack-stats.json'
    }),
    new ExtractText({
      filename: '[name]-[hash].css'
    }),
  ],
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx']
  },
}
