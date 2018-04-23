const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const resolve = require('./utils/resolve')
const packageConfig = require('../package.json')
const genMarkdownLoader = require('./utils/gen-loader').genMarkdownLoader

const config = {
  root: 'demo',
  entryFile: './demo/index.js',
  assetsRoot: resolve('demo/antd-vue')
}

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: '#cheap-module-eval-source-map',
  entry: ['babel-polyfill', config.entryFile],
  output: {
    filename: '[name].js',
    path: config.assetsRoot,
  },
  module: {
    rules: [
      genMarkdownLoader()
    ]
  },
  plugins: [
    // new OptimizeCssAssetsPlugin({
    //   assetNameRegExp: /\.css$/
    // }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: config.root + '/index.html'
    }),
    // new BundleAnalyzerPlugin(),
  ]
})

module.exports = { config, devWebpackConfig }
