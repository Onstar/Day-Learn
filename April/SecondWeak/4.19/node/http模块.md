[TOC]
# 使用`http`模块创建服务器实例
```JS
'use strict'

const http = require("http");

//创建一个服务器的实例，创建的是 http.Server 这个对象.
const server = http.createServer();
//监听 request 事件,当有请求发送到服务器的时候，触发了 request 事件
//触发完成就调用了 callback 函数
//请求对象 request,响应对象 response
//http模块做了封装，请求报文封装到了request对象里面.
//使用response里面的方法构造响应报文，调用response里面的方法，将报文返回回去.
//response是 http.ServerResponse对象，是一个写文件流
//request是http.IncomingMessage对象, 是一个读文件流
server.on("request",function(request,response){
    //1：状态码，2：往报文头里写内容。
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    //向响应报文的报文体写内容
    response.write("hello");
    response.write("<h>world</h>");
    response.end();
})
server.listen(3000);
//注：1.报文头要写在报文体前面。  
//2.response.end()方法只能写一次，在改方法之后用write写入的内容无效
//3.response.end()方法里的参数只能是字符串类型
```

```JS
//request对象
server.on("request",function(request,response){
    //request对象
    console.log(request.httpVersion);//版本号
    console.log(request.method);    //请求方式
    console.log(request.url);       //请求地址的路径
    //request对象信息，可以根据用户发送的请求信息，判断需要返回的信息
    if(request.url=='/news.html'&&request.method=='GET'){
        response.end('<div>新闻</div>');
    }
})
```
```JS
//GET方式请求
const fs = require("fs");
server.on('request',function(req,res){
    if(req.url=='/1.html'&&req.method=='GET'){
        fs.readFile('./1.html','utf8',function(err,data){
            res.end(data)
        })
    }
})
```
```JS
//POST方式请求
server.on('request',function(req,res){
    if(req.url=='/getData'&&req.method=='POST'){
        //post方法发送数据的方式
        let data = "";
        req.on('data',function(chunk){
            data = data+chunk;
        })
        req.on('end',function(){
            console.log(data);//后台打印
            res.end(data);
        })
    }
})
//注: 如果传的数据是 {name:'zhang',age:23}
//则在后台打印出的结果是：name='zhang'&age=23
```
```JS
//querystring 模块的应用
//格式化数据为一个对象
const querystring = require('querystring');
server.on('request',function(req,res){
    if(req.url=='/getData'&&req.method=='POST'){
        req.on('data',function(chunk){
            data = data+chunk;
        })
        req.on('end',function(){
            //把data格式化为一个对象
            let dataObj = querystring.parse(data);  
            console.log(dataObj);
            res.end('dataObj');
        })
    }
})
```