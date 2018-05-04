'use strict'
const http = require("http");
const fs = require("fs");
const url = require("url");

let server = http.createServer();

server.on("request",function(req,res){
   let urlPath = url.parse(req.url) ; 
   let data = urlPath.query;
    if(urlPath.pathname=="/a.html"&&req.method=="GET"){
        fs.readFile("../ajax/a.html","utf8",function(err,data){
            res.write(data);
            res.end();
        });
    }else if(urlPath.pathname=="/getData"){
        res.write(data);
        res.end()
    }
})
server.listen(3000)