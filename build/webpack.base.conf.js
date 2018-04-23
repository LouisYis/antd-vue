const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const resolve = require('./utils/resolve')
const genStyleLoader = require('./utils/gen-loader').genStyleLoader

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: true
  }
})

module.exports = {
  resolve: {
    extensions: ['*', '.js', '.json', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      createLintingRule(),
      {
        test: /\.vue$/,
        loaders: [{
          loader: 'vue-loader',
          options: {
            loaders: {
              less: genStyleLoader()
            },
            transformToRequire: {
              video: ['src', 'poster'],
              source: 'src',
              img: 'src',
              image: 'xlink:href'
            }
          }
        }],
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loaders: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: genStyleLoader()
      }
    ]
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin({
      clearConsole: true
    })
  ]
}
