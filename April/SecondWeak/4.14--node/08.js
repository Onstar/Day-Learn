var fs = require("fs");

fs.appendFile("./a/a.text","chaungjain","utf8",(err)=>{
    // console.log(err)
})
fs.writeFile("./a/a.text","xiugai","utf8",(err)=>{
    
})

fs.readFile("./a/a.text","utf8",(err,data)=>{
    console.log(data)
})