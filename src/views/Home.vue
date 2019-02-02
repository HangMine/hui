<template>
  <div class="home">
    <header class="home-header">JS组件</header>
    <h-cell
      v-for="cell of jsList" 
      :key="cell.title" 
      :title="cell.title" 
      :icon="cell.icon"
      class="home-cell"
      is-link
      :to="cell.link"
    ></h-cell>
    <header class="home-header">CSS组件</header>
    <h-cell
      v-for="cell of cssList" 
      :key="cell.title" 
      :title="cell.title" 
      :icon="cell.icon"
      class="home-cell"
      is-link
      :to="cell.link"
    ></h-cell>
    <header class="home-header">FORM表单</header>
    <h-cell
      v-for="cell of formList" 
      :key="cell.title" 
      :title="cell.title" 
      :icon="cell.icon"
      class="home-cell"
      is-link
      :to="cell.link"
    ></h-cell>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      jsList: [
        {
          title: "Msg",
          icon: "iconfont  icon-gouxuan",
          link: "/Msg"
        },
        {
          title: "load",
          icon: "iconfont  icon-jiazai",
          link: "/load"
        },
        {
          title: "Pull down",
          icon: "iconfont  icon-xiangxia",
          link: "/Pulldown"
        },
        {
          title: "Pull up",
          icon: "iconfont  icon-xiangshang",
          link: "/Pullup"
        },
        {
          title: "Infinite Scroll",
          icon: "iconfont  icon-infinite",
          link: "/InfiniteScroll"
        },
        {
          title: "Message box",
          icon: "iconfont  icon-icon--",
          link: "/MsgBox"
        },
        {
          title: "Action sheet",
          icon: "iconfont  icon-list-1-copy",
          link: "/ActionSheet"
        },
        {
          title: "Popup",
          icon: "iconfont  icon-xiaoxitixingchuangkoudanchufangshi",
          link: "/Popup"
        },
        {
          title: "Swipe",
          icon: "iconfont  icon-lunboxiaoguo",
          link: "/Swipe"
        },
        {
          title: "Range",
          icon: "iconfont  icon-switch",
          link: "/Range"
        },
        {
          title: "Progress",
          icon: "iconfont  icon-jindutiao",
          link: "/Progress"
        },
        {
          title: "Picker",
          icon: "iconfont  icon-shaixuan",
          link: "/Picker"
        },
        {
          title: "Datetime picker",
          icon: "iconfont  icon-riqi",
          link: "/DatetimePicker"
        },
        {
          title: "Index List",
          icon: "iconfont  icon-sort",
          link: "/IndexList"
        },
        {
          title: "Palette Button",
          icon: "iconfont  icon-wuuiconxiangjifangda",
          link: "/PaletteButton"
        },
        {
          title: "Lazyload",
          icon: "iconfont  icon-wuuiconxiangjifangda",
          link: "/Lazyload"
        }
      ],
      cssList: [
        {
          title: "Header",
          icon: "iconfont  icon-buju_toubu",
          link: "/Header"
        },
        {
          title: "Tabbar",
          icon: "iconfont  icon-buju_dibu",
          link: "/Tabbar"
        },
        {
          title: "Navbar",
          icon: "iconfont  icon-buju_zhucaidan",
          link: "/Navbar"
        },
        {
          title: "TabContainer",
          icon: "iconfont  icon-xianshicaidan",
          link: "/TabContainer"
        },
        {
          title: "Button",
          icon: "iconfont  icon-anniu",
          link: "/Button"
        },
        {
          title: "Cell",
          icon: "iconfont  icon-liebiao",
          link: "/Cell"
        },
        {
          title: "Cell Swipe",
          icon: "iconfont  icon-liebiao",
          link: "/CellSwipe"
        },
        {
          title: "Spinner",
          icon: "iconfont  icon-jiazai1",
          link: "/Spinner"
        },
        {
          title: "Search",
          icon: "iconfont  icon-icon-chaxun",
          link: "/Search"
        }
      ],
      formList: [
        {
          title: "Switch",
          icon: "iconfont  icon-kaiguan",
          link: "/Switch"
        },
        {
          title: "Checklist",
          icon: "iconfont  icon-liebiao2",
          link: "/Checklist"
        },
        {
          title: "Radio",
          icon: "iconfont  icon-plus-radio",
          link: "/Radio"
        },
        {
          title: "Field",
          icon: "iconfont  icon-biaodan",
          link: "/Field"
        },
        {
          title: "Badge",
          icon: "iconfont  icon-tishi",
          link: "/Badge"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "~@/assets/var";
@import "~@/assets/mixin";
.home-header {
  padding: 0.3rem;
  text-align: center;
  font-size: 0.5rem;
}
.home-cell {
  font-size: 0.3rem;
  .h-cell-title-icon {
    color: $color-blue;
    font-size: 0.5rem !important;
    margin-right: 0.2rem;
  }
}
//全局展示按钮样式
.demo-btn-wrap {
  padding: 0.3rem;
  @include flex-column-center;
  height: calc(100vh - 1.1rem);
  .demo-btn {
    margin-bottom: 0.4rem;
  }
}
.demo-title {
  padding: 0.2rem;
  text-align: center;
  color: gray;
}
.demo-page {
  padding-top: 1.1rem;
}
</style>
