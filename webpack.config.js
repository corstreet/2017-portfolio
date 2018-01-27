const webpack = require('webpack');
const path = require('path');
// const DashboardPlugin = require('webpack-dashboard/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const APP_DIR = path.resolve(__dirname, 'src/js');
const BUILD_DIR = path.resolve(__dirname, './dist');

const config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    // new DashboardPlugin(),
    new ExtractTextPlugin("../dist/styles.css")
  ],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader?minimize!postcss-loader!sass-loader"
        }),
      }
    ]
  }
};

module.exports = config;