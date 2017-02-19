const webpack = require('webpack');
const path = require('path');
const BUILD_DIR = path.resolve(__dirname, './public');
const APP_DIR = path.resolve(__dirname, './app');

const config = {
  devtool: 'source-map',
  entry: APP_DIR + '/Router.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loaders : ['babel-loader']
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
};
module.exports = config;