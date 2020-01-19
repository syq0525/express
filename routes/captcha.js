/*
 * @Description: 
 * @Author: ShiYangquan
 * @Date: 2020-01-10 14:05:05
 * @LastEditors  : ShiYangquan
 * @LastEditTime : 2020-01-10 15:10:54
 */
var express = require('express');
var router = express.Router();
const svgCaptcha = require('svg-captcha')


router.get('/syq/captcha', (req, res) => {
  const cap = svgCaptcha.create({
    ignoreChars: '0o1i',
    fontSize: 30,
    noise: 2,
    width: 80,
    height: 30,
    // color: true,
    // background: '#f0faff' 
  });
  req.session.captcha = cap.text; // session 存储验证码数值
  res.type('svg'); // 响应的类型
  res.send({
    status:0,
    content:cap.data
  })
})

module.exports = router;