## Req 相关属性

+ `req.query`: 解析后的`url`中的*querystring*, 如`?name=haha`, `req.query`的值为`{name: 'haha'}`
+ `req.params`: 解析`url`中的占位符, 如`/:name`, 访问`/yeaseon`, `req.params`的值为`{name: 'yeaseon'}`
+ `req.body`: 解析后的请求体，需要相关的模块, 如*body-parser*, 请求体为`{"name": "yeaseon"}`, 则`req.body`为`{name: 'yeaseon'}`

