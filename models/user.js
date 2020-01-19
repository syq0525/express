/*
 * @Description: 
 * @Author: ShiYangquan
 * @Date: 2019-12-24 13:42:47
 * @LastEditors  : ShiYangquan
 * @LastEditTime : 2020-01-16 16:47:25
 */
const mongoose  = require('mongoose');
// const mongoose = require('../config/mongodb');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
const userSchema =new mongoose.Schema({
  name:{type:String},
  email:{type:String},
  content:{type:String}
})

userSchema.plugin(autoIncrement.plugin,{
  model: 'users',
	field: '_id',
	startAt: 100,
	incrementBy: 1,
})

module.exports = mongoose.model('users',userSchema)