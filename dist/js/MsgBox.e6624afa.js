(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["MsgBox"],{6011:function(t,n,o){},c92f:function(t,n,o){"use strict";var e=o("6011"),r=o.n(e);r.a},d3f3:function(t,n,o){"use strict";o.r(n);var e=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"demo-page"},[o("demo-header"),o("div",{staticClass:"demo-btn-wrap"},[o("h-button",{staticClass:"demo-btn",attrs:{size:"large"},nativeOn:{click:function(n){return t.alert(n)}}},[t._v("弹出alert框")]),o("h-button",{staticClass:"demo-btn",attrs:{size:"large"},nativeOn:{click:function(n){return t.confirm(n)}}},[t._v("弹出confirm框")]),o("h-button",{staticClass:"demo-btn",attrs:{size:"large"},nativeOn:{click:function(n){return t.prompt(n)}}},[t._v("弹出prompt框")])],1)],1)},r=[],i={methods:{alert:function(){this.$msgBox.alert("这是alert框").then(function(){return console.log("确定回调")})},confirm:function(){this.$msgBox.confirm("这是confirm框","确定关闭嘛?").then(function(){return console.log("确定回调")},function(){return console.log("取消回调")})},prompt:function(){this.$msgBox.prompt("这是prompt框").then(function(t){return console.log(t)},function(){return console.log("取消回调")})}}},s=i,c=(o("c92f"),o("2877")),a=Object(c["a"])(s,e,r,!1,null,null,null);a.options.__file="MsgBox.vue";n["default"]=a.exports}}]);
//# sourceMappingURL=MsgBox.e6624afa.js.map