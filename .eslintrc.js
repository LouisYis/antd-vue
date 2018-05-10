// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  globals: {
    'expect': true,
    'describe': true,
    'it': true,
    'test': true,
    'jest': true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: ['plugin:vue/essential', 'airbnb-base'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  rules: {
    'max-len': 0,
    'no-console': 0,
    'comma-dangle': 0,
    'arrow-parens': ['error', 'as-needed'],
    'arrow-body-style': ['error', 'as-needed'],
    'no-unused-expressions': ['error', {
      'allowShortCircuit': true,
      'allowTernary': true
    }],
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'vm', // vue view model
        'el', // for dom element
        'e' // for e.returnvalue
      ]
    }]
  }
}
