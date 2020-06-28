# Eslint

[eslint](https://eslint.org/)作为目前使用最广泛的前端代码规范检测工具。可以配置`extends`, `plugins`赋能更多的规范配置。

## 三种方式支持对ESLint进行配置

+ 根目录创建.eslintrc文件
+ 根目录创建.eslintrc.js文件
+ 在package.json中新建eslint属性

配置eslint 自动修复

```.
eslint --fix
```

## 流程的编程风格（基本各个团队都有不同的编程风格）

eslint可以说作为一个代码检测的工具，可以自定义各种代码风格，也可以使用以下的代码风格作为自己项目的规范。

+ [standard](https://github.com/standard/standard)
+ [airbnb](https://github.com/airbnb/javascript)
+ [prettier](https://github.com/prettier/prettier)

### standard + eslint

### airbnb + eslint

### prettier + eslint

### standaer + prettier + eslint

项目中仅仅配置`prettier`是完全不能满足前端代码整理规范的，因此搭配`standard`可以概括更多的代码规则

```.
npm i -D eslint-config-prettier eslint-plugin-prettier prettier
```

+ eslint-config-prettier：处理与eslint检测规则冲突的配置项目 
+ eslint-plugin-prettier：使用 prettier 作为 ESLint 的规则
+ prettier：核心的库

配置项目说明:

```js
module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    es6: true
  },
  extends: [
    "plugin:prettier/recommended",
  ],
  plugins: [],
  rules: {
    "prettier/prettier": "error"  // 配置prettier的提醒
  },
  global: {}
}
```
