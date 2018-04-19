const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')
const webpack = require('webpack')
const portfinder = require('portfinder')
const packageConfig = require('../package.json')

// Helpers
const resolve = file => require('path').resolve(__dirname, file)

const extractPlugin = ExtractTextPlugin.extract({
  use: ['css-loader', 'postcss-loader', 'less-loader'],
  fallback: 'style-loader'
})

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: '#cheap-module-eval-source-map',
  entry: ['babel-polyfill', './dev/index.js'],
  output: {
    filename: '[name].js',
    path: resolve('../dev'),
    publicPath: '/dev/',
    library: 'antv'
  },
  module: {
    noParse: /es6-promise\.js$/, // avoid webpack shimming process
  },
  performance: {
    hints: false
  },
  devServer: {
    contentBase: resolve('../dev'),
    publicPath: '/dev/',
    hot: true,
    host: 'localhost',
    compress: true,
    quiet: true,
    watchOptions: {
      poll: false,
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // new OptimizeCssAssetsPlugin({
    //   assetNameRegExp: /\.css$/
    // }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': "'development'"
    }),
    // new BundleAnalyzerPlugin(),
    new WriteFilePlugin({
      test: /\.css$/
    })
  ]
})

const createNotifierCallback = () => {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') return

    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()

    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}


module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = 8080
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        }
      }))

      resolve(devWebpackConfig)
    }
  })
})
