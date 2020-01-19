/*
 * @Description: 
 * @Author: ShiYangquan
 * @Date: 2019-12-19 13:48:31
 * @LastEditors  : ShiYangquan
 * @LastEditTime : 2020-01-16 16:51:20
 */
var express = require('express');
var router = express.Router();
var url = require('url');
const User = require("../models/user");


/* GET home page. */


// 注册接口
router.post('/syq/register', function (req, res, next) {
  const sessionCaptcha = req.session.captcha.toLowerCase()
  const captcha = req.body.captcha.toLowerCase()
  if(sessionCaptcha!==captcha){
    return res.json({
      status: 2,
      content: "验证码错误"
    })
    
  }
  const item = {
    count: req.body.count,
    password: req.body.password,
    name: req.body.name,
    age: req.body.age,
    sex: req.body.sex,
    phone:req.body.phone
  }
  User.findOne({
    name: {
      "$in": req.body.count
    }
  }, (err, user) => {

    if (err) {
      res.json({
        status: "fail",
        error: err
      })
    } else {
      if (user) {
        res.json({
          status: 1,
          content: "该账号已经注册，请去登录"
        })
      } else {
        User.create(item, (err) => {
          if (err) {
            res.json({
              status: "fail",
              error: err
            })
          } else {
            // req.session.user = user.name
            // res.cookie('user',user.name);
            res.json({
              status: 0,
              content: user
            })
          }
        })
      }

    }
  })
});

// 登录接口
router.post('/syq/sendMessage', function (req, res, next) {
  User.create(req.body, (err) => {
    if (err) {
      res.json({
        status: "fail",
        error: err
      })
    } else {
      res.json({
        status: 0,
        content: '发送成功'
      })
    }
  })
});

module.exports = router;