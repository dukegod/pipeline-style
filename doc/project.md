# 项目配置

## 项目开发规范：

* [项目命名规范](#项目命名)
* [目录命名规范](#目录命名)
* [文件命名规范](#文件命名)
* [HTML](#HTML)
* [CSS/SCSS/LESS](#CSS/SCSS/LESS)
* [JavaScript](#JavaScript)
* [editorConfig](#editorconfig)
* [gitignore](#gitignore)
* [Prettier](#Prettier)
* [git-check](#git-check)
* []()
* [检测工具](#)
* [测试工具](#)
* [编译打包工具](#)

### 项目命名

全部采用小写方式， 以中划线分隔。

```conf
my-project-name
```

### 目录命名

参照项目命名规则；  
有复数结构时，要采用复数命名法。        

例：scripts, styles, images, data-models

### 文件命名

文件也以中划线为标准：

* my-js.js
* my-css.css
* my-html.html

### HTML

* 缩进使用soft tab（2个空格）
* 嵌套的节点应该缩进
* 在属性上，使用双引号，不要使用单引号
* 属性名全小写，用中划线做分隔符：data-id

### CSS/SCSS/LESS

* 缩进使用soft tab（2个空格）
* 每个属性声明末尾都要加分号

#### 类名

* 类名使用小写字母，以中划线分隔:sub-class
* id采用驼峰式命名: mainFirst
* scss中的变量、函数、混合、placeholder采用驼峰式命名
* [BEN规范](./BEM.md)

### JavaScript

* 缩进使用soft tab（2个空格）
* 常量：const
* 构造函数，class： 首字母大写

### editorconfig

编辑器适配

* charset = utf-8 ： 设定字符
* indent_style = space ：缩进格式
* indent_size = 2 ：缩进大小
* end_of_line = lf ： Unix-style
* insert_final_newline = true ： 默认最后一行留空
* trim_trailing_whitespace = true ：去除行以后的空白
* [{, }] ：定向匹配文件

### gitignore

git 忽略文件

### Prettier

批量格式化文件

* 配置安装： 

```sh
npm i --save-dev prettier
```

* 配置文件

创建`.prettierrc`，该配置文件会继承editorConfig的配置

配合 `package.json` 命令

```js
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "prettier": "prettier --write './test/**/*.js' './test/**/*.css' './test/**/*.less' './test/**/*.scss' './test/**/*.vue' './test/**/*.jsx'"
},
```

`npm run prettier` 快捷更新文件

* 配置项说明

  * singleQuote : 单引号
  * trailingComma: "es5", // 数组 对象尾随逗号 [arr, ] { obj, }
  * bracketSpacing: true, // 对象空格 { foo: bar }

* 配置忽略文件

`.prettierignore`

### git-check

#### husky

```js
npm install husky --save-dev

or

yarn add husky --dev
```

修改 `pakeage.json`

```js
{
  "husky": {
    "hooks": {
      "pre-commit": "npm test",
      "pre-push": "npm test",
      "...": "..."
    }
  }
}
```
