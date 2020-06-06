# 项目相关

## 项目开发规范

* [常用命名法](#命名法)
* [项目命名规范](#项目命名)
* [目录命名规范](#目录命名)
* [文件命名规范](#文件命名)

### 命名法

#### 匈牙利命名法

该命名规范，要求前缀字母用变量类型的缩写，其余部分用变量的英文或英文的缩写，单词第一个字母大写。  
**不推崇的用法**

```java
int iAge
float fMoney
char cAddress
```

#### 驼峰式命名法（又名小驼峰命名法）

第一个单词首字母小写，后面其他单词首字母大写。  
**推崇的用法**

```js
let applePrice
let applePriceNumber
```

#### 帕斯卡命名法（又名大驼峰命名法）

第一个单词首字母也大写，后面其他单词首字母大写。

```js
let ApplePrice
let ApplePriceNumber
```

#### 下划线命名法

单词与单词之间通过下划线连接。  
**比较推崇用在常量或者宏定义**

```js
let apple_price
let MAIN_DOMAIN
```

### 项目命名

全部采用小写方式， 以中划线分隔。

`my-project-name`

### 目录命名

参照项目命名规则；  
有复数结构时，要采用复数命名法。尽量少出现**中划线**        

例：`scripts`, `styles`, `images`, `data-models`

### 文件命名

文件也以中划线为标准：

* my-js.js
* my-css.css
* my-html.html
