// 'use strict'
// index.js

const fs = require("fs");

fs.readdir(process.cwd(),function(err,files){
    console.log(" ");
    if(!file.length){
        return console.og("\033[31m No files to Show!\033[39m\n");
    }
    console.log("Select which file or directory you want to seen");
    function file(i) {
        let filename = files[i];
        fs.stat(__dirname+'/'+filename,function(err,stat){
            if(stat.isDirectory()){
                console.log(" "+ i +" \003[36m" + filename + '/\033[39m');
            }else{
                console.log(" "+ i + " \033[90m" + filename + '\033[39m');
            }
            i++;
            if(i==files.length){
                console.log(" ");
                process.stdout.write(" \033[33mEnter your choice: \033[39m");
                process.stdin.resume();
                process.stdin.setEncoding("utf8");
            } else {
                file(i);
            }
        })
    }
    file(0)
})
