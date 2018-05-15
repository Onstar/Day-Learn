[TOC]

# `express` 项目构建

## 1. `express`安装

```
1. express 工具全局安装： npm install -g express
2. express 命令的使用 -h 通过帮助命令查看  

```

## 2. `express`初始化项目

初始化一个项目名称叫`demo`的项目并且在项目中加入`handlbars`模板引擎的支持。   
`express --hbs demo`  

在一个已经进行项目命名的文件夹里初始化一个项目
`express --hbs`

**注释：** `express`还可以使用其他的模板引擎构建，可以使用：   
`express -h` 命令查看，还可以使用`ejs`,`jade`等模板。  

### 2.1 `express`项目结构

- `bin`目录：存放脚本文件
- `models` : 存放模型文件
- `mode_modules`
- `public` : 静态文件
- `routes` : 路由&控制层 
- `views`  : 视图(存放模板文件)

### 2.2 脚本文件的执行，与命令行工具的开发  

- `bin` 中的 `www` 文件时一个脚本文件
- 写一个 `node` 脚本只需要在文件一开始写上-->`#!/usr/bin/env node`  
  这句话的意义是这个文件使用`node`进行运行
- 两种方式调用脚本
  +第一种使用`npm`进行文件调用
  1.在`package.json`中设置`scripts`  

  ```JSON
  "scripts": {
    "start": "node ./bin/www"
  }
  ```
  2.在这包的目录中打`npm start`命令
  +第二种编写一个全局安装的命令行工具
  1.在`package.json`中设置`bin`  
  ```JSON
  "bin":{
    "haha":"./bin/www"
  }
  ```
  2.是用`npm link`命令将写好的代码安装到全局  
    和`npm install -g `区别  
  3. 在控制台打`haha`可以执行`./bin/www`脚本

## 3. `express` 的路由中间件

### 3.1 为什么需要路由中间件

1. 项目分工
2. 提高代码可读性
3. 对比起没有用路由中间件的写法代码更优雅

### 3.2 路径中间件的使用

- 在早期的 `express` 中没有路由中间件。  
- 在 `express` 早期版本将代码拆分模块的写法

示例(不使用中间件)：  
1. 在 `routes` 创建一个 `user.js` ,用于 `user` 模块代码的编写  

```Javascript
module.exports = function(app){
    app.get("/getUser",function(req,res){
        res.send("{success:true}");
    })
}

```
2. 在 `app.js` 中引入这个模块

```Javascript
var user = require("./routes/user");
```

3. 启用这个模块里面的路由

`user(app)`  


- 使用中间件

1. 在 `routers` 创建一个 `user.js` ，用于 `user` 模块代码的编写。  

```Javascript
var express = require("express");
var router = express.Router();
router.get("/getUser",function(req,res){
    res.send("{success:true}");
})
module.exports = router;
```

2. 在 `app.js` 中引入这个模块

```Javascript
var user = requite("./routes/user");
```

3. 启用这个模块里面的路由

`app.use("/",user);