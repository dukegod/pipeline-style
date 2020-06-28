# 配置git提交规范

## commitlint

使用 commitlint 等命令行工具，辅助我们规范提交代码。

### 具体配置

具体配置如下：

1、安装 commit 命令行工具

目的：提交代码时，可以使用命令行进行交互。

```js
npm install --save-dev git-cz 
// or
yarn add git-cz
```

2、配置 package.json

```js
"scripts": { 
    "commit": "git-cz" 
}
```

3、在项目根目录配置 git-cz 的配置文件 `changelog.config.js`

目的：在每次需要 commit 时，执行 npm run commit 就行了。

ps：不同的项目，scope 配置会不一致，可以根据实际情况修改 scope 配置项。

到此为止，已经配置好了提交规则，以后再提交时，使用 npm run commit 代替 git commit -m 'xxx' 即可。

接下来配置提交校验机制。

4、配置 commitlint

目的：配置 commit 校验规则。

```js
npm install --save-dev @commitlint/config-conventional @commitlint/cli
or 
yarn add @commitlint/config-conventional @commitlint/cli
```

添加 commitlint 配置文件 `commitlint.config.js`

5、安装 husky 控制 git 钩子

目的：在 git 提交的时候校验 commit 是否符合规范。

```js
npm install --save-dev husky
or 
yarn add husky
```

安装完成后，在 package.json 文件中添加 husky 配置项：

```js
"husky": { 
    "hooks": { 
        "commit-msg": "commitlint -E HUSKY_GIT_PARAMS" 
    } 
}
```

6、lint-staged 提交之前做代码校验与格式化

```js
npm install --save-dev lint-staged
// or
yarn add --dev lint-staged
```

修改`package.json`

```js
 "husky": {
    "hooks": {
      "pre-commit": [
        "lint-staged"
      ],
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
  "lint-staged": {
    "*.{js}": [
      "npm run eslint",
      "npm run prettier",
      "git add",
      "npm run commit"
    ],
    "*.{css, less, scss, vue} ": [
      "npm run prettier",
      "git add",
      "npm run commit"
    ]
  },
```

7、编写 release 命令

目的：根据 commit 自动修改版本号，自动生成 changelog.md 文件。发布上线的时候，执行一下即可。

```js
npm install standard-version --save-dev
or 
yarn add standard-version
```

安装完成后，配置 npm script：

```js
"scripts": { 
    "release": "standard-version" 
} 
```
