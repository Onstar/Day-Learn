//用户表的增删改查的操作
const connection = require("./db1.js");

let getUserList = function(callback){
    // query 方法执行sql语句
    connection.query('SELECT * FROM klt_user',function(err,rows,fields){
        if(err) throw err;
        console.log(rows);
        callback(rows);
    })

}

exports.getUserList = getUserList; 