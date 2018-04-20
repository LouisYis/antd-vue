const portfinder = require('portfinder')
const merge = require('webpack-merge')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const webpack = require("webpack")
const { config, devWebpackConfig } = require('../webpack.demo.conf')
const packageConfig = require('../../package.json')

const MODE = process.env.NODE_ENV
const BUILD_CONFIG = {
  development: {
    mode: 'development',
    devServer: {
      contentBase: config.assetsRoot,
      // publicPath: '/demo/',
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
      new webpack.NoEmitOnErrorsPlugin()
    ]
  },
  production: {
    mode: 'production',
    output: {
      filename: '[name].[chunkhash].js'
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.css$/,
            chunks: 'all',
            enforce: true
          }
        }
      },
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true
        }),
        new OptimizeCSSAssetsPlugin({})
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].[hash].css'
      })
    ]
  }
}

function getConfig(mode) {
  const extraConfig = BUILD_CONFIG[mode]

  if (mode === 'development') {
    return new Promise((resolve, reject) => {
      portfinder.basePort = 8080
      portfinder.getPort((err, port) => {
        if (err) {
          reject(err)
        } else {
          process.env.PORT = port
          extraConfig.devServer.port = port

          // Add FriendlyErrorsPlugin
          extraConfig.plugins.push(new FriendlyErrorsPlugin({
            compilationSuccessInfo: {
              messages: [`Your application is running here: http://${extraConfig.devServer.host}:${port}`],
            }
          }))

          resolve(merge(devWebpackConfig, extraConfig))
        }
      })
    })
  }

  return merge(devWebpackConfig, extraConfig)
}

module.exports = getConfig(MODE)
