"use strict"
const http = require("http");
//创建一个服务器实例，创建的是 http.Server这个对象
const server = http.createServer();

//监听request事件，当有请求发送到服务器的时候，触发了request事件

server.on("request",function(request,response){
    // response.write("hello");
    console.log(request.httpVersion);
    console.log(request.method);
    console.log(request.url);
    if(request.url=='/login.html'&&request.method=="GET"){
        response.end("<div>登录</div>")
    }else if(request.url=="/login.html"&&request.method=="POST"){
        response.end("<div>success</div>")
    }else{
        response.end("<div>都不是</div>")
    }
    //参数1：状态码，2.往报文里写的内容
    // response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
    // response.write("<head>hello</head>")
    // response.end();
})
server.listen(3000);

