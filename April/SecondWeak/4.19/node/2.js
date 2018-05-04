const http = require("http");
const fs = require("fs");

var server = http.createServer();

server.on("request",function(req,res){
    if(req.url=='/1.html'&&req.method=='GET'){
        fs.readFile('./1.html','utf8',function(err,data){
            // console.log(data);
            res.end(data);
        })
    }
    else if(req.url=='/test.js'&&req.method=='GET'){
        fs.readFile('./test.js','utf8',function(err,data){
            console.log(data);
            res.end(data);
        })
    }
})
server.listen(3000);