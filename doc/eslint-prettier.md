# 代码规范与校验

## prettier

代码风格进行检查

三种方式支持对Prettier进行配置：

+ 根目录创建.prettierrc文件
+ 根目录创建.prettier.config.js文件
+ 在package.json中新建prettier属性

配置项目说明：

```.
"printWidth": 80, //一行的字符数，如果超过会进行换行，默认为80
"tabWidth": 2, //一个tab代表几个空格数
"useTabs": false, //是否使用tab进行缩进，默认为false，表示用空格进行缩减
"singleQuote": false, //字符串是否使用单引号，默认为false，使用双引号
"semi": true, //行位是否使用分号，默认为true
"trailingComma": "none", //是否使用尾逗号，有三个可选值"<none|es5|all>"
"bracketSpacing": true, //对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
"parser": "babylon" //代码的解析引擎，默认为babylon，与babel相同。
```

## ESLint

代码风格与规范的校验工具

三种方式支持对ESLint进行配置：

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
  }
}
```

### 综合配置 eslint + prettier

```.
npm i -D eslint-config-prettier eslint-plugin-prettier prettier
```

+ eslint-config-prettier：处理与eslint检测规则冲突的配置项目 
+ eslint-plugin-prettier： 使用 prettier 作为 ESLint 的规则
+ prettier： 核心的库

配置eslint 自动修复

```.
eslint --fix
```

### 配置 eslint + prettier + typescript

typescript 也推荐使用eslint作为默认的检测工具

```.
npm i eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin -D
```

eslint 配置

```js
module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "plugin:@typescript-eslint/recommended" // Uses the recommended rules from the @typescript-eslint/eslint-plugin
  ],
  rules: {
  
  },
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module" // Allows for the use of imports
  }
};
```
