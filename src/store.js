import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routerAnimate: 'slide-left'
  },
  mutations: {
    setRouterAnimate(state, routerAnimate) {
      state.routerAnimate = routerAnimate;
    }
  },
  actions: {

  }
})