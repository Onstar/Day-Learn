var express = require('express');
var path = require('path');
const user = require('./models/user.js');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/getUserList',function(req,res){
    user.getUserList(function(rows){
        res.json(rows);
    })
})

module.exports = app;
