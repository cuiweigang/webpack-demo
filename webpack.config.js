/**
 * Created by cuiweigang on 16/6/3.
 */
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    app: ['./src/app.js'],
    react: ['react', 'react-dom']
  },
  target: "web",
  debug: true,
  watch: true,
  watchDelay: 300,
  output: {
    path: path.join('public', 'js'),
    publicPath: 'http://localhost:8000/js/',
    filename: '[name].js'
  },

  module: {
    loaders: [
      {test: /\.css/, loader: "style-loader!css-loader"},
      {test: /\.gif/, loader: "url-loader?limit=10000&minetype=image/gif"},
      {test: /\.jpg/, loader: "url-loader?limit=20000&minetype=image/jpg"},
      {test: /\.png/, loader: "url-loader?limit=20000&minetype=image/png"},
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel?presets[]=react,presets[]=es2015"]
      }
    ],
    noParse: /\.min\.js/
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('react', 'react.js')
  ]
};