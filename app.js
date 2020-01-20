/*
 * @Description: 
 * @Author: ShiYangquan
 * @Date: 2019-12-19 13:48:31
 * @LastEditors  : ShiYangquan
 * @LastEditTime : 2020-01-20 10:01:22
 */
const createError = require('http-errors');
const history = require('connect-history-api-fallback')
const express = require('express');
const path = require('path');

const cookieParser = require('cookie-parser');
const logger = require('morgan');
// const ejs = require('ejs');
const mongodb = require('./config/mongodb');
const bodyParser = require("body-parser");
const session = require('express-session');

const captchaRouter = require('./routes/captcha');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();
// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

app.use('/webapps',history({
	rewrites: [
    { from: /^\/webapps$/, to: '/webapps/index.html' }
  ]
}));

app.use('/webpc',history({
	rewrites: [
    { from: /^\/webpc$/, to: '/webpc/index.html' }
  ]
}));

// app.use('/',history({
// 	index:'/webapps/index.html'
// }));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
	extended: false
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(cookieParser('countly_node_cookie'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(
	session({
		secret: 'countly_node_cookie',
		name: 'session_id', //# 在浏览器中生成cookie的名称key，默认是connect.sid
		resave: true,
		saveUninitialized: true,
		cookie: {
			maxAge: 60 * 1000 * 30
		}, //过期时间
	}),
);


// app.all('*', function(req, res, next) {

// 	res.header("Access-Control-Allow-Origin", "*");//项目上线后改成页面的地址

// 	res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");

// 	next();

// })


app.use('/', indexRouter);


// data server
mongodb.connect();
module.exports = app;