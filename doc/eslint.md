# Eslint

[eslint](https://eslint.org/)作为目前使用最广泛的前端代码检测工具。处理默认支持的检测规范，还可以配置`extends`, `plugins`

## 三种方式支持对ESLint进行配置

+ 根目录创建.eslintrc文件
+ 根目录创建.eslintrc.js文件
+ 在package.json中新建eslint属性

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
    "prettier/prettier": "error"
  },
  global: {}
}
```

配置eslint 自动修复

```.
eslint --fix
```

## 流程的编程风格（基本各个团队都有不同的编程风格）

+ [standard](https://github.com/standard/standard)
+ [airbnb](https://github.com/airbnb/javascript)
+ [prettier](https://github.com/prettier/prettier)

### standard + eslint

### Airbnb + eslint

### prettier + eslint

```.
npm i -D eslint-config-prettier eslint-plugin-prettier prettier
```

+ eslint-config-prettier：处理与eslint检测规则冲突的配置项目 
+ eslint-plugin-prettier： 使用 prettier 作为 ESLint 的规则
+ prettier： 核心的库
