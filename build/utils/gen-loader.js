const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const slugify = require('transliteration').slugify
const md = require('markdown-it')()
const utils = require('./markdown-utils')

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
    options: {
      use: [
        [require('markdown-it-anchor'), {
          level: 2,
          slugify: slugify,
          permalink: true,
          permalinkBefore: true
        }],
        [require('markdown-it-container'), 'demo', {
          validate: function(params) {
            return params.trim().match(/^demo\s+(.*)$/);
          },
          render: function(tokens, idx) {
            var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
            if (tokens[idx].nesting === 1) {
              var description = (m && m.length > 1) ? m[1] : '';
              var content = tokens[idx + 1].content;
              var html = utils.convert(utils.strip(content, ['script', 'style'])).replace(/(<[^>]*)=""(?=.*>)/g, '$1');
              var descriptionHTML = description
                ? md.render(description)
                : '';

              return `<demo-block class="demo-box">
                        <div class="source" slot="source">${html}</div>
                        ${descriptionHTML}
                        <div class="highlight" slot="highlight">`;
            }
            return '</div></demo-block>\n';
          }
        }],
        [require('markdown-it-container'), 'tip'],
        [require('markdown-it-container'), 'warning']
      ],
      preprocess: function(MarkdownIt, source) {
        MarkdownIt.renderer.rules.table_open = function() {
          return '<table class="table">';
        };
        MarkdownIt.renderer.rules.fence = utils.wrap(MarkdownIt.renderer.rules.fence);
        return source;
      }
    }
  }
}

module.exports = { genStyleLoader, genMarkdownLoader }
