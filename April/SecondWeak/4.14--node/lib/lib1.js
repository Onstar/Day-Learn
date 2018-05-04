var fs = require("fs");

var rf = function(cb){
    fs.readFile(__dirname+"/foo.text",'utf8',(err,data)=>{
        cb(data)
    })
}
module.exports = rf;