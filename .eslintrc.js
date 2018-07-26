module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2016,
        "sourceType": "module",
        'ecmaFeatures': {
          'vue': true
        }
    },
    "plugins": [
      "eslint-plugin-vue"
    ],
    "rules": {
      'indent': ['error', 2],
      'react/jsx-indent': [ 'error',2],
      'react/jsx-indent-props':[ 'error',2],
      'jsx-quotes': ['error', 'prefer-double'],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'curly':['error','all'],
    }
};