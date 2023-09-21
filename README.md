# css-modules-demos

webpack+vue写css-modules例子

## 局部作用域-demo01

CSS的规则都是全局的，任何一个组件的样式规则，都对整个页面有效。

产生局部作用域的唯一方法，就是使用一个独一无二的class的名字，不会与其他选择器重名。这就是 CSS Modules 的做法。

 Webpack 的css-loader:将类名style.title编译成一个哈希字符串。

## 全局作用域-demo02

CSS Modules 允许使用:global(.className)的语法，声明一个全局规则。凡是这样声明的class，都不会被编译成哈希字符串。

CSS Modules 还提供一种显式的局部作用域语法:local(.className)，等同于.className

```CSS
:local(.title) {
  color: red;
}
/* 等同于*/
.title {
  color: red;
}
```

## 定制哈希类名-localIdentName

css-loader默认的哈希算法是[hash:base64]，这会将.title编译成._3zyde4l1yATCOkgn-DBWEL这样的字符串。

## Class 的组合-demo04

在 CSS Modules 中，一个选择器可以继承另一个选择器的规则，这称为"组合"（"composition"）。

在App.css中，让.title继承.className 。

## 输入其他模块-demo05

选择器也可以继承其他CSS文件里面的规则。

## 输入变量-demo06

CSS Modules 支持使用变量
