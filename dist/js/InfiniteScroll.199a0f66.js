(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["InfiniteScroll"],{"4bd0":function(i,n,e){},"8a4e":function(i,n,e){"use strict";e.r(n);var t=function(){var i=this,n=i.$createElement,e=i._self._c||n;return e("div",{staticClass:"demo-page"},[e("demo-header"),e("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:i.loadFn,expression:"loadFn"}],staticClass:"demo-infinite-scroll",attrs:{"infinite-scroll-loading":i.loading}},[i._l(i.list,function(i){return e("li",{key:i},[e("h-cell",{attrs:{title:i}})],1)}),e("li",{directives:[{name:"show",rawName:"v-show",value:i.loading,expression:"loading"}],staticClass:"spinner"},[e("spinner")],1)],2)],1)},l=[],a={data:function(){return{list:15,loading:!1}},methods:{loadFn:function(){var i=this;this.loading=!0,setTimeout(function(){i.list+=5,i.loading=!1},1500)}}},s=a,o=(e("c1a5"),e("2877")),r=Object(o["a"])(s,t,l,!1,null,null,null);r.options.__file="InfiniteScroll.vue";n["default"]=r.exports},c1a5:function(i,n,e){"use strict";var t=e("4bd0"),l=e.n(t);l.a}}]);
//# sourceMappingURL=InfiniteScroll.199a0f66.js.map