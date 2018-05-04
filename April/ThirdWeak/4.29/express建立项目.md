[TOC]

# `express`建立项目

1. 安装`express`
```JS
//如果不安装express-generator，在创建项目的时候会提示
//express命令没有找到
npm install -g express-generator
npm install -g express
//检测是否安装成功
express -V
//创建一个 express 项目
express yourProjectName
//进入创建的项目目录
cd yourProjectName
//下载package.json文件中的依赖
npm install
//启动项目(有两种方式)
//第一种
npm start
//第二种
//在app.js文件中末尾加上一句：app.listen(3000)
//然后执行
node app.js

```