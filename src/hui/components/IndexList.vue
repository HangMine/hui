<template>
  <div class="h-index-list-wrap" :style="wrapStyle" ref="wrap">
    <ul class="h-index-list" ref="indexList">
      <li class="h-index-list-item" v-for="item of data" :key="item.title" ref="indexItem">
        <p class="h-index-list-item-header">{{item.title}}</p>
        <h-cell v-for="(value,index) of item.values" :key="index" :title="value" is-link></h-cell>
      </li>
    </ul>

    <ul class="h-index-nav" @touchstart="start" @touchmove.stop="move" @touchend="end">
      <li class="h-index-nav-item" v-for="item of data" :key="item.title">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "h-index-list",
  props: {
    data: Array,
    height: [Number, String] //number--rem
  },
  data() {
    return {
      currentHeight: 0,
      indexText: "",
      msgVm: null,
      timer: null
    };
  },
  computed: {
    wrapStyle() {
      let resHeight =
        typeof this.height == "number" ? `${this.height}rem` : this.height;
      return { height: this.height ? resHeight : `${this.currentHeight}px` };
    }
    //按字母排序
    // currentData() {
    //   return this.data.sort((a, b) => a.title > b.title);
    // }
  },
  mounted() {
    this.setHeight();
  },
  methods: {
    setHeight() {
      if (this.height) return;
      let wrap = this.$refs.wrap;
      this.currentHeight =
        document.documentElement.clientHeight - wrap.offsetTop;
      //是使用哪个offsetTop还是getBoundingClientRect().top取高度。（是否需要考虑元素高度超出屏幕时场景）

      // this.currentHeight =
      //   document.documentElement.clientHeight -
      //   wrap.getBoundingClientRect().top;
      // console.log(wrap.getBoundingClientRect().top,wrap.scrollTop);
    },
    start(e) {
      if (e.target.tagName != "LI") return;
      this.setIndexText(e.target);
      this.setOffsetTop();
      this.showMsg();
    },
    move(e) {
      let touch = e.changedTouches[0];
      let pointX = touch.pageX;
      let pointY = touch.pageY;
      let target = document.elementFromPoint(pointX, pointY);
      if (!target || target.tagName != "LI") return;
      this.setIndexText(target);
      this.setOffsetTop();
      this.showMsg();
    },
    end() {
      this.resetTimer();
    },
    setIndexText(target) {
      this.indexText = target.innerHTML;
    },
    setOffsetTop() {
      let index = this.data.findIndex(item => item.title == this.indexText);
      let offsetTop =
        this.$refs.indexItem[index].offsetTop - this.$refs.wrap.offsetTop;
      this.$refs.indexList.scrollTop = offsetTop;
    },
    showMsg() {
      if (this.msgVm == null)
        this.msgVm = this.$msg({
          msg: this.indexText,
          duration: -1,
          className: "h-index-list-msg"
        });

      this.msgVm.msg = this.indexText;
    },
    setTimer() {
      this.timer = setTimeout(() => {
        this.msgVm.close();
        this.msgVm = null;
      }, 1000);
    },
    resetTimer() {
      clearTimeout(this.timer);
      this.setTimer();
    }
  }
};
</script>

<style lang="scss">
@import "../scss/var";
@import "../scss/mixin";
.h-index-list-wrap {
  display: flex;
  .h-index-list {
    overflow: auto;
    flex: 1;
    .h-index-list-item {
      .h-index-list-item-header {
        padding: 0.2rem;
        background: $index-list-header-bg-color;
      }
      &:nth-of-type(1) {
        border-top: 1px solid $border-color;
      }
    }
  }

  .h-index-nav {
    height: 100%;
    display: flex;
    @include flex-column-center;
    border: 1px solid $border-color;
    border-right: none;
    font-size: 0.24rem;
    .h-index-nav-item {
      padding: 0.04rem 0.15rem;
    }
  }
}
.h-index-list-msg {
  font-size: 0.5rem;
  padding: 0.2rem 0.4rem;
}
</style>
