var fs = require("fs");
fs.readFile("./02.js",'utf8',(err,data)=>{
    console.log(data)
})

fs.access('./02a.js',(err)=>{//判断文件路径是否正确
    if(err){
        console.log("error")
    }
})