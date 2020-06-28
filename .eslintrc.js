module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
  },
  extends: [
    'standard',
    'plugin:prettier/recommended'
  ],
  plugins: [],
  globals: {
    __DEV__: true,
    __HTTPS__: true,
    $: true,
  },
  rules: {
    "prettier/prettier": "error",  // 配置prettier的提醒
    semi: ["error", "always"],
    "space-before-function-paren": ["error", {
      "anonymous": "always",
      "named": "never",
      "asyncArrow": "always"
  }],
  },
};
