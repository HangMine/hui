import Vue from 'vue'
import Router from 'vue-router'
import store from './store.js';
import Home from './views/Home.vue'
Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [{
      path: '*',
      name: 'NotFoundComponent',
      component: () =>
        import( /* webpackChunkName: "NotFoundComponent" */ './views/NotFoundComponent.vue')
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Msg',
      name: 'Msg',
      component: () =>
        import( /* webpackChunkName: "Msg" */ './views/Msg.vue')
    },
    {
      path: '/Load',
      name: 'Load',
      component: () =>
        import( /* webpackChunkName: "Load" */ './views/Load.vue')
    },
    {
      path: '/Pulldown',
      name: 'Pulldown',
      component: () =>
        import( /* webpackChunkName: "Pulldown" */ './views/Pulldown.vue')
    },
    {
      path: '/Pullup',
      name: 'Pullup',
      component: () =>
        import( /* webpackChunkName: "Pullup" */ './views/Pullup.vue')
    },
    {
      path: '/InfiniteScroll',
      name: 'InfiniteScroll',
      component: () =>
        import( /* webpackChunkName: "InfiniteScroll" */ './views/InfiniteScroll.vue')
    },
    {
      path: '/MsgBox',
      name: 'MsgBox',
      component: () =>
        import( /* webpackChunkName: "MsgBox" */ './views/MsgBox.vue')
    },
    {
      path: '/ActionSheet',
      name: 'ActionSheet',
      component: () =>
        import( /* webpackChunkName: "ActionSheet" */ './views/ActionSheet.vue')
    },
    {
      path: '/Popup',
      name: 'Popup',
      component: () =>
        import( /* webpackChunkName: "Popup" */ './views/Popup.vue')
    },
    {
      path: '/Swipe',
      name: 'Swipe',
      component: () =>
        import( /* webpackChunkName: "Swipe" */ './views/Swipe.vue')
    },
    {
      path: '/Range',
      name: 'Range',
      component: () =>
        import( /* webpackChunkName: "Range" */ './views/Range.vue')
    },
    {
      path: '/Progress',
      name: 'Progress',
      component: () =>
        import( /* webpackChunkName: "Progress" */ './views/Progress.vue')
    },
    {
      path: '/Picker',
      name: 'Picker',
      component: () =>
        import( /* webpackChunkName: "Picker" */ './views/Picker.vue')
    },
    {
      path: '/DatetimePicker',
      name: 'DatetimePicker',
      component: () =>
        import( /* webpackChunkName: "DatetimePicker" */ './views/DatetimePicker.vue')
    },
    {
      path: '/IndexList',
      name: 'IndexList',
      component: () =>
        import( /* webpackChunkName: "IndexList" */ './views/IndexList.vue')
    },
    {
      path: '/PaletteButton',
      name: 'PaletteButton',
      component: () =>
        import( /* webpackChunkName: "PaletteButton" */ './views/PaletteButton.vue')
    },
    {
      path: '/Lazyload',
      name: 'Lazyload',
      component: () =>
        import( /* webpackChunkName: "Lazyload" */ './views/Lazyload.vue')
    },

    //CSS组件
    {
      path: '/Header',
      name: 'Header',
      component: () =>
        import( /* webpackChunkName: "Header" */ './views/Header.vue')
    },
    {
      path: '/Tabbar',
      name: 'Tabbar',
      component: () =>
        import( /* webpackChunkName: "Tabbar" */ './views/Tabbar.vue')
    },
    {
      path: '/Navbar',
      name: 'Navbar',
      component: () =>
        import( /* webpackChunkName: "Navbar" */ './views/Navbar.vue')
    },
    {
      path: '/TabContainer',
      name: 'TabContainer',
      component: () =>
        import( /* webpackChunkName: "TabContainer" */ './views/TabContainer.vue')
    },
    {
      path: '/Button',
      name: 'Button',
      component: () =>
        import( /* webpackChunkName: "Button" */ './views/Button.vue')
    },
    {
      path: '/Cell',
      name: 'Cell',
      component: () =>
        import( /* webpackChunkName: "Cell" */ './views/Cell.vue')
    },
    {
      path: '/CellSwipe',
      name: 'CellSwipe',
      component: () =>
        import( /* webpackChunkName: "CellSwipe" */ './views/CellSwipe.vue')
    },
    {
      path: '/Spinner',
      name: 'Spinner',
      component: () =>
        import( /* webpackChunkName: "Spinner" */ './views/Spinner.vue')
    },
    {
      path: '/Search',
      name: 'Search',
      component: () =>
        import( /* webpackChunkName: "Search" */ './views/Search.vue')
    },

    //form组件
    {
      path: '/Switch',
      name: 'Switch',
      component: () =>
        import( /* webpackChunkName: "Switch" */ './views/Switch.vue')
    },
    {
      path: '/Checklist',
      name: 'Checklist',
      component: () =>
        import( /* webpackChunkName: "Checklist" */ './views/Checklist.vue')
    },
    {
      path: '/Radio',
      name: 'Radio',
      component: () =>
        import( /* webpackChunkName: "Radio" */ './views/Radio.vue')
    },
    {
      path: '/Field',
      name: 'Field',
      component: () =>
        import( /* webpackChunkName: "Field" */ './views/Field.vue')
    },
    {
      path: '/Badge',
      name: 'Badge',
      component: () =>
        import( /* webpackChunkName: "Badge" */ './views/Badge.vue')
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})

//设置路由切换动画
router.beforeEach((to, from, next) => {
  //根据路径层级决定左右滑动
  let toLen = to.path == '/' ? 1 : to.path.split('/').length;
  let fromLen = from.path == '/' ? 1 : from.path.split('/').length;
  if (toLen > fromLen) {
    store.commit('setRouterAnimate', 'slide-left')
  } else {
    store.commit('setRouterAnimate', 'slide-right')
  }

  next();
})

export default router;