const { resolve } = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: "styles.css",
  // disable: process.env.NODE_ENV === "development"
});

const config = {
  entry: resolve(__dirname, 'js') + '/index.jsx',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
//      {
//        test: /\.(png|svg|jpg|gif|jpeg)$/,
//        use: 'file-loader'
//      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }],
          // use style-loader in development
          fallback: "style-loader"
        })
      }
    ]
  },
  plugins: [
    extractSass
  ]
};


module.exports = config;
