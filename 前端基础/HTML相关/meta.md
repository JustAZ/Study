# <meta>元素
> meta标签放置在/<head/>中,提供html的元素据,元素不会显示在页面上,对浏览器可见.可用于浏览器如何显示内容或重新加载;添加关键字供搜索引擎识别等作用

## 属性:
    属性           值                          描述
+ http-equiv    refresh/exprise/setCookie    将content属性关联到http头部,可使用refresh重定向
+   name        author/descripion/keywords/  将属性关联到一个到一个名称
+ content       some text

## 应用
### SEO优化
+ 页面关键词-keywords,每个页面对应对应具有描述网页内容的唯一一组关键字
```
<meta name='keywords' content='关键字'>
```
+ 页面描述-decription
> 每个网页都应该具有不超过150的描述
```
<meta name='keywords' content='描述'>
```
+ 搜索引擎的方式,
```
<meta name='robots' content='follow,all'>
<!--
    all:文件将被检索,且页面上的链接可被插查询
    none:文件将不被检索
    index:文件将被检索
    follow:页面上的链接可以被查询
    noindex:文件将不被检索
    nofollow:页面上的链接不可被查询
-->
```
+ 其他
```
<meta name="author" content="author name" /> <!-- 定义网页作者 -->
<meta name="google" content="index,follow" />
<meta name="googlebot" content="index,follow" />
<meta name="verify" content="index,follow" />
```

### 移动设备
> viewport可以优化移动浏览器的显示

```
<meta name='viewport' content='width=device-width,intial-scale=1.0,maximum-scale=1.0,user-scalable=no'/>
```
- intial-scale:初始的缩放比
- user-scalable:是否可缩放

### 网页相关
+ 申明编码
```
<meta charset='utf-8' />
```
+ 优先使用IE最新版本呢和Chorme
```
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<!-- 关于X-UA-Compatible -->
<meta http-equiv="X-UA-Compatible" content="IE=6" ><!-- 使用IE6 -->
<meta http-equiv="X-UA-Compatible" content="IE=7" ><!-- 使用IE7 -->
<meta http-equiv="X-UA-Compatible" content="IE=8" ><!-- 使用IE8 -->
```
[https://cnbin.github.io/blog/2016/02/03/x-ua-compatibleshu-xing-de-jie-shi/]