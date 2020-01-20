/*
 * @Description: 
 * @Author: ShiYangquan
 * @Date: 2019-12-24 14:00:02
 * @LastEditors  : ShiYangquan
 * @LastEditTime : 2020-01-20 10:04:07
 */
const mongoose = require("mongoose");
const env = process.env.NODE_ENV||"development"
let dburl;

if(env.includes('development')){
  dburl = 'mongodb://admin:Syq719335@47.105.184.39:27017/syq?authSource=admin'
}else{
  dburl = 'mongodb://admin:Syq719335@127.0.0.1:27017/syq?authSource=admin'
}

connect = () => {
  mongoose.connect(dburl,{
    useUnifiedTopology: true,
    useNewUrlParser: true 
  })
  
  // 连接错误
  mongoose.connection.on('error', error => {
    console.log('数据库连接失败!', error)
  })

  // 连接成功
  mongoose.connection.on('open', () => {
    console.log('数据库连接成功!')
  })

  // return mongoose
}
module.exports = {connect}