var path = require('path');
var node_modules = path.resolve(__dirname, '../node_modules');

module.exports = {
  entry: path.resolve(__dirname, '../src/client/scripts/client.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /src(\\|\/).+\.jsx?$/, 
        exclude: /node_modules/, 
        loader: 'babel'
      },
      {
        test: /\.(css)$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?size=8192'
      }
    ]
  }
};