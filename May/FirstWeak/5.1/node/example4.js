const fs = require("fs");

fs.readFile("./a.txt",function(err,chunk){
    console.log(chunk)
})