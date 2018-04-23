const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const genStyleLoader = require('./utils/gen-loader').genStyleLoader

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
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'theme/[name].css'
    })
  ]
})
