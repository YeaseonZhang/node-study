## ejs 模板引擎
ejs模板引擎类似于underscore中的用法, ejs有3种常用的标签：
+ `<% code %>`：运行JavaScript代码, 不输出
+ `<%= code %>`: 显示转义后的HTML内容
+ `<%- code %>`: 显示原始HTML内容

> 注意：<%= code %> 和 <%- code %> 都可以是 JavaScript 表达式生成的字符串，当变量 code 为普通字符串时，两者没有区别。当 code 比如为 <h1>hello</h1> 这种字符串时，<%= code %> 会原样输出 <h1>hello</h1>，而 <%- code %> 则会显示 H1 大的 hello 字符串。

不过使用jade(pug)开发效率会更加高。

ejs可以通过内置的`include`方法, 将拆分的组件引入到模板文件中
```
<%- include('header') %>
    <h1><%= name.toUpperCase() %></h1>
    <p>hello, <%= name%></p>
<%- include('footer') %>
```

>>> 
小提示：拆分模板组件通常有两个好处：

1. 模板可复用，减少重复代码
2. 主模板结构清晰

注意：要用 <%- include('header') %> 而不是 <%= include('header') %>
>>>