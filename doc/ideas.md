# 编译工具配置

主流的`vscode`, `webstrome`, `intelliJ`

对于编辑器的支持主要是`vscode`

## 配置vscode

### 入门简单

比较宽松的配置就是`editorConfig`配置

### 进阶点

配置`prettier`,这个也算是目前前端比较火热的代码优化工具

### 更严格配置

配置`eslint`，参考[eslint配置](./eslint.md)

vscode打开自动保存

```.
"editor.formatOnSave": true
```

vscode打开eslint自动fix

```.
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
},
```

解决vscode prettier与 eslint校验冲突问题

关闭vscode自动保存，手动格式化代码，保存仍旧走eslint自动格式化，可能需要在eslint配置中关闭prettier校验

```.
extends: ['plugin:vue/essential', '@vue/prettier', 'standard'],
rules: {
  'prettier/prettier': 'off',
  'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
},
```
