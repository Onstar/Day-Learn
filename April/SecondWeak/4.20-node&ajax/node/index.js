'use strict'
const http = require("http");
const fs = require("fs");

let server = http.createServer();

server.on("request",function(req,res){
    if(req.url=='/a.html'&&req.method=="GET"){
        fs.readFile("../ajax/a.html",'utf8',function(err,data){
            res.end(data)
        })
    }
    // else if(req.url)
})
server.listen(3000);