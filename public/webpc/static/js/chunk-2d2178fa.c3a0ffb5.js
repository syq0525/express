(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2178fa"],{c6f7:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[t._v(" 账号："),n("input",{directives:[{name:"model",rawName:"v-model",value:t.count,expression:"count"}],attrs:{type:"text"},domProps:{value:t.count},on:{input:function(e){e.target.composing||(t.count=e.target.value)}}})]),n("div",[t._v(" 密码："),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"text"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),n("div",{on:{click:t.denglu}},[t._v("登录")]),n("router-link",{attrs:{to:"/reg"}},[t._v("去注册")])],1)},s=[],a=n("2427"),u=n.n(a),r={data:function(){return{count:"",password:""}},methods:{denglu:function(){var t=this,e={count:this.count,password:this.password};u()({method:"post",url:"/syq/login",data:e,timeout:1e4,headers:{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/json;charset=UTF-8"}}).then((function(e){if(e&&(200===e.status||304===e.status||400===e.status)){var n=e.data;0==n.status?(localStorage.setItem("userInfo",JSON.stringify(n.content)),t.$router.push("/")):alert(n.content)}}))}}},i=r,c=n("5511"),d=Object(c["a"])(i,o,s,!1,null,null,null);e["default"]=d.exports}}]);