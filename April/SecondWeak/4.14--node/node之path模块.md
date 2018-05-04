[TOC]

`path`模块常用方法

```
-- path.join()      //拼接完整正确的路径
-- path.basename("/foo/bar/baz/quux.html")          //获取文件名及后缀：quux.html
-- path.basename("/foo/bar/baz/quux.html",".html")  //获取文件名：quux
-- path.dirname("/foo/bar/baz/quux.js")             //获取文件路径："/foo/bar/baz"
-- path.extname(""/foo/bar/baz/quux.text");         //获取后缀名：.text
```