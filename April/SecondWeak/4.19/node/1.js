
'use strict'

const http = require("http");

//创建一个服务器的实例，创建的是 http.Server 这个对象.
const server = http.createServer();
//监听 request 事件,当有请求发送到服务器的时候，触发了 request 事件
//触发完成就调用了 callback 函数
//请求对象 request是 http.IncomingMessage对象;响应对象 response,是 http.ServerResponse对象
//http模块做了封装，请求报文封装到了request对象里面.
//使用response里面的方法构造响应报文，调用response里面的方法，将报文返回回去.

server.on("request",function(request,response){
    //1：状态码，2：往报文头里写内容。
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    //向响应报文的报文体写内容
    response.write("hello");
    response.end();
})
server.listen(3000);
