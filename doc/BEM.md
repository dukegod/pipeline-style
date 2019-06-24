# BEN

主要是用来规范`CSS`命名的代码风格统一

## BEM 命名规范

Bem 是块（block）、元素（element）、修饰符（modifier）的简写，由 Yandex 团队提出的一种前端 CSS 命名方法论。

> 
> `-`中划线 ：仅作为连字符使用，表示某个块或者某个子元素的多单词之间的连接记号，可以认为是`css`保留符合，让`css`更加便于理解  
> `__`双下划线：用来连接块和块的子元素  
> `--`双中划线：用来描述一个块或者块的子元素的一种状态   
>

### BEM 命名约定的模式是

```css
.block {}

.block__element {}

.block--state {}
```

使用了 BEM 命名方法的示例：

```html
<div class="article">
    <div class="article__body">
        <div class="article__tag"></div>
        <button class="article__button--primary"></button>
        <button class="article__button--success"></button>
    </div>
</div>
```

通过 BEM 命名方式，模块层级关系简单清晰，而且 css 书写上也不必作过多的层级选择。

### `CSS`预处理器中使用

LESS 为例：

```css
.article {
    max-width: 1200px;
    &__body {
        padding: 20px;
    }
    &__button {
        padding: 5px 8px;
        &--primary {background: blue;}
        &--success {background: green;}
    }
}
```
