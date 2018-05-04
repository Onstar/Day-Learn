"use strict"
const http = require("http");
//创建一个服务器实例，创建的是 http.Server这个对象
const server = http.createServer();

//监听request事件，当有请求发送到服务器的时候，触发了request事件

server.on("request",function(request,response){
    response.write("hello");
    response.end();
})
server.listen(3000);

