const fs = require("fs");
// console.log(process.argv)

// console.log(process.argv.slice(2))

// console.log(__dirname);      //获取执行文件时，该文件在文件系统中所在目录

// console.log(__filename);     //获取执行文件时，该文件在文件系统中所在路径

console.log(process.cwd())
process.chdir("/");
console.log(process.cwd())

