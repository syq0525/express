/*
 * @Description: 
 * @Author: ShiYangquan
 * @Date: 2019-12-19 13:48:31
 * @LastEditors  : ShiYangquan
 * @LastEditTime : 2020-01-16 16:48:16
 */
var express = require('express');
var path = require('path')
var router = express.Router();
var url = require('url');
// const Info = require("../models/info");
const fs = require('fs')
const multer = require("multer")


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // 保存的路径，备注：需要自己创建
  },
  filename: function (req, file, cb) {
    var extname = path.extname(file.originalname); //获取文件扩展名
    // 将保存文件名设置为 字段名 + 时间戳+文件扩展名，比如 logo-1478521468943.jpg
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({
  storage: storage
})

router.post('/syq/upload', upload.array('files'), (req, res, next) => {

  let fileList = [];
  req.files.map((e) => {
    var link = req.get('origin')+'/uploads/' + e.filename
    Info.create({head:link}, (err) => {

      // res.sendFile(name);
      
    })
    fileList.push({
      originalname: link
    })
  });
  res.json({
    status : 0,
    fileList: fileList
  });

  // let file = req.file
  // 

  


})

module.exports = router;