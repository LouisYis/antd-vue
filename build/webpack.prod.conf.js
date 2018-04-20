const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

// Helpers
const resolve = require('./utils/resolve')

module.exports = merge(baseWebpackConfig, {
  mode: 'none',
  entry: require('./utils/get-components').getCompoentnsEntries(),
  output: {
    path: resolve('lib'),
    library: 'antd'
  },
  performance: {
    hints: false
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: genLoaders({
          extract: true
        })
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'theme/[name].css'
    })
  ]
})
