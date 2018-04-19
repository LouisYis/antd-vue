const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

var extractPlugin = ExtractTextPlugin.extract({
  use: ['css-loader', 'postcss-loader', 'less-loader'],
  fallback: 'style-loader'
})

// Helpers
const resolve = file => require('path').resolve(__dirname, file)

module.exports = merge(baseWebpackConfig, {
  devtool: '#source-map',
  entry: {
    app: './src/index.js'
  },
  output: {
    path: resolve('../dist'),
    publicPath: '/dist/',
    library: 'antv'
  },
  module: {
    noParse: /es6-promise\.js$/, // avoid webpack shimming process
  },
  performance: {
    hints: false
  }
})
