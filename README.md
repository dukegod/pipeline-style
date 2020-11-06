# pipeline-style

## 项目开发规范

* [项目命名规范](#项目命名)
* [目录命名规范](#目录命名)
* [文件命名规范](#文件命名)
* [注释规范](#注释规范)
* [HTML](#HTML)
* [CSS/SCSS/LESS](#CSS-SCSS-LESS)
* [JavaScript](#JavaScript)
* [editorConfig](#editorconfig)
* [gitignore](#gitignore)
* [Prettier](#Prettier)
* [eslint](#eslint)
* [git-check](#git-check) 
* [lint-staged](#lint-staged)
* [husky](#husky)
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

### 注释规范

页面功能注释 与 函数注释

页面功能注释(js, css, html)

```conf
/**
 * @description
 * @author
 * @date
 */
```

函数注释

```conf
/**
 * @description
 * @param
 * @author
 * @date
 */
```

### HTML

* 缩进使用soft tab（2个空格）
* 嵌套的节点应该缩进
* 在属性上，使用双引号，不要使用单引号
* 属性名全小写，用中划线做分隔符：data-id

### CSS-SCSS-LESS

* 缩进使用soft tab（2个空格）
* 每个属性声明末尾都要加分号

#### 类名

* 类名使用小写字母，以中划线分隔:sub-class
* id采用驼峰式命名: mainFirst
* scss中的变量、函数、混合、placeholder采用驼峰式命名
* [BEM规范](./BEM.md)

### JavaScript

* 缩进使用soft tab（2个空格）
* 常量：const
* 构造函数，class： 首字母大写

### editorconfig

关注不同的操作系统下编辑器对于代码的格式化

* charset = utf-8 ： 设定字符
* end_of_line = lf ： Unix-style
* indent_style = space ：缩进格式
* indent_size = 2 ：缩进大小
* insert_final_newline = true ： 默认最后一行留空
* trim_trailing_whitespace = true ：去除行以后的空白
* [{, }] ：定向匹配文件

[详情](./doc/editorConfig.md)

### prettier 

更加关注于代码格式化

[详情](./doc/prettier.md)

### eslint

更加关注与代码质量

[详情](./doc/eslint.md)
