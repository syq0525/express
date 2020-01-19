/*
 * @Description: 
 * @Author: ShiYangquan
 * @Date: 2020-01-10 08:57:01
 * @LastEditors: ShiYangquan
 * @LastEditTime: 2020-01-10 08:58:56
 */
module.exports = {
  apps: [{
    name: "prod-project",
    script: "./bin/www",
    watch: true,
    env: {
      "NODE_ENV": "production",
      "PORT": 3000
    }
  }]
}