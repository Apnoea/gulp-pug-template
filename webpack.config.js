const path = require('path'),
  webpack = require('webpack');

module.exports = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'scripts.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'window.$': 'jquery',
      'jQuery': 'jquery',
      'window.jQuery': 'jquery',
      'jquery': 'jquery',
      'window.jquery': 'jquery'
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  performance: {
    hints: false
  }
};
