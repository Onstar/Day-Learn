'use strict'
const fs = require("fs");
const http = require("http");
const querystring = require("querystring");
const server = http.createServer();
//监听request事件
server.on("request",(req,res)=>{
    // if(req.url=='/1.html'&&req.method=='GET'){
    //    fs.readFile("./1.html",'utf8',function(err,data){
    //        res.end(data)
    //    }) 
    // }
    // else if(req.url=='/test.js'&&req.method=="GET"){
    //     fs.readFile("./test.js",'utf8',function(err,data){
    //          res.end(data)
    //     })
    // }
    if(req.url=='/getData'&&req.method=='POST'){
        let data = "";
        req.on("data",function(chunck){
            data=data+chunck;
        })
        req.on("end",function(){
            console.log(data);
            let dataObj = querystring.parse(data);
            console.log(dataObj)
            res.end("123");
         })
    }
})
server.listen(3000);