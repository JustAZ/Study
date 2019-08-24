# 概述
AMD采用的是异步的方式去加载依赖的模块.主要是用于解决浏览器的模块化问题,允许指定回调函数.
CommonJS是同步加载模块的,即只有加载完成后才可执行后面的操作

```
//定义没有依赖的模块
define(function(){
    return 模块
})

//定义有依赖的模块
define(['module','module2'],function(m1,m2){
    return 模块
})

//引入使用的模块
require(['module1','module2'],function(m1,m2){
    使用m1,m2
})
```
#优点
1. 可异步加载
2. 可并行加载多个依赖
#缺点
1. 需要先导入AMD的库后才可以正常使用