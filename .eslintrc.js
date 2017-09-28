// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  globals: {
    'expect': true,
    'describe': true,
    'it': true,
    'jest': true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // set maximum line characters
    'max-len': [2, 140, 4, {'ignoreUrls': true, 'ignoreTemplateLiterals': true, 'ignoreStrings': true}],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // disallow indentation using both tabs and spaces
    'no-mixed-spaces-and-tabs': 2,
    // ensure consistent 2 space indentation and indent cases under switch
    'indent': [2, 2, {'SwitchCase': 1}],
    'object-curly-spacing': [2, 'always'],
    // never use space before funtion
    'space-before-function-paren': ['error', 'never']
  }
}
