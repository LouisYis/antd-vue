const MiniCssExtractPlugin = require("mini-css-extract-plugin")

function genStyleLoader(options = {}) {
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

  const extract = options.extract || process.env.NODE_ENV === 'production'
  if (extract) loaders.unshift(MiniCssExtractPlugin.loader)

  return ['vue-style-loader'].concat(loaders)
  // return loaders
}

function genMarkdownLoader() {
  return {
    test: /\.md$/,
    loader: 'vue-markdown-loader',
    use: [
      [require('markdown-it-anchor'), {
        level: 2,
        slugify: slugify,
        permalink: true,
        permalinkBefore: true
      }],
      [require('markdown-it-container'), {

      }]
    ]
  }
}

module.exports = { genStyleLoader }
