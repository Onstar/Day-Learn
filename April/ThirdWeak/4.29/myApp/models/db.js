let mysql = require("mysql");

//创建链接只是创建了一个链接对象
let connection = mysql.createConnection({
    host : 'localhost',
    user : "user1",
    password : "123456",
    database : "user1",
});

//开始链接

connection.connect();

//query 方法执行sql语句

connection.query('SELECT * FROM klt_user',function(err,rows,fields){
    if(err) throw err;
    console.log(rows);
})
//链接断开
connection.end();