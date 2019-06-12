import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import HUI from "./hui";
Vue.use(HUI);

import "@/assets/font/iconfont.css";

import VueLazyLoad from "vue-lazyload";
Vue.use(VueLazyLoad);

import FastClick from "fastclick";
FastClick.attach(document.body);

Vue.config.productionTip = false;

//引入全局demo-header
import DemoHeader from "./views/DemoHeader.vue";
Vue.component("demo-header", DemoHeader);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
