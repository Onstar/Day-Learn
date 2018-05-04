[TOC]

# 工具的使用

## 1. 通过 `nodemon` 实现 保存文件实时重启

1. 安装nodemon ` npm install -g nodemon `
2. 基本使用 `nodemon server.js`

只要执行了上面的命令，那么当你修改了` server.js` 那么`nodemon`会帮你自动重启` server`

## 2. 使用`npm`命令执行代码
1. `package.json`里面配置`scripts`属性里面写`npm`的命令
2. `npm`的命令在控制台直接`npm`打印出来可以查看
3. `npm`命令后面接的是具体的命令，打`npm`命令调用具体的命令

## 3. 编写`node`脚本
1. 把`js`代码变成`node`脚本
在要执行的`js`文件当中加入下面这句话，是固定写法
`#!/usr/bin/env node`

2. `package.json`里面配置bin属性里面写命令,这个命令的名称是可以自定义的

3. 必须打`npm link`这个命令，把当前包安装到全局去