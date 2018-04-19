const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const resolve = file => require('path').join(__dirname, '..', file)

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

function genLoaders(options = {}) {
  const styleLoaders = ['css', 'postcss']
  const loaders = styleLoaders.map(item => {
    const temp = {
      loader: `${item}-loader`
    }

    return temp
  })

  const less = {
    loader: 'less-loader',
    options: Object.assign({
      javascriptEnabled: true
    }, options)
  }

  loaders.push(less)
  // return [MiniCssExtractPlugin.loader].concat(loaders)
  return loaders
}

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
              less: genLoaders
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
        use: genLoaders()
      }
    ]
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin({
      clearConsole: true
    })
  ]
}
