//分路由  使用传统的方式去分路由
var express = require('express');
var path = require('path');
var news = require('./routes/news.js');
var user = reuqire('./routes/user.js')

var app = express();

news(app);
user(app);

module.exports = app;
