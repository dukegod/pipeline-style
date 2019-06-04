module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'plugin:react/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
  plugins: ['react'],
  settings: {
    react: {
      pragma: 'React',
      version: '16.1.1',
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },

  globals: {
    __DEV__: true,
    __HTTPS__: true,
    $: true,
  },

  rules: {},
};
