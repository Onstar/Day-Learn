
const fs = require("fs");

function file(i){
    let filename = files[i];

    fs.stat(__dirname + "/" + filename,function(err,stat){
        if(stat.isDirectory()){
            console.log(" " + i + "\033[36m" + filename + "/\033[39m");
        }else {
            console.log(" " + i +" \033[90m" + filename + "\033[39m");
        }

        if(++i==files.length){
            read();
        } else {
            file(i);
        }
    });
}

//read user input when files are shon

function read(){
    console.log(" ");
    stdout.write(" \033[33mEnter your choice: \033[39m");
    stdin.resume();
    stdin.setEncoding("utf8");
}