module.exports = {
  root: false,

  overrides: [
    {
      files: ['__mocks__/**/*.js', 'gatsby-config.js', 'jest.config.js', 'jest-preprocess.js'],
      env: {
        browser: false,
        node: true,
      },
    },
    {
      files: ['./**/*.test.js', '__mocks__/**/*.js', 'loadershim.js'],
      env: {
        jest: true,
      },
      globals: {
        global: false,
      },
    },
  ],
}
