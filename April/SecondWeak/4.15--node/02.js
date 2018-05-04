const fs = require("fs");

const rs = fs.createReadStream("./1.avi");
const ws = fs.createWriteStream("./2.avi");
//rs.pipe(ws)
fs.open("data",function(chunck){
    console.log(chunk.length);
    ws.write(chunk);
})
fs.open("end",function(){
    console.log("结束了");
    ws.end();
})