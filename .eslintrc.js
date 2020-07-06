module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['prettier', 'react'],
  rules: {
    'prettier/prettier': 'error',
  },

  overrides: [
    {
      files: ['.eslintrc.js', 'prettier.config.js'],
      env: {
        browser: false,
        node: true,
      },
    },
  ],
}
