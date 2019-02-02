<template>
  <div v-show="show" class="h-shade" :style="{opacity:opacity}"></div>
</template>

<script>
export default {
  name: "h-shade",
  props: {
    opacity: {
      type: Number,
      default: 0.4
    }
  },
  data() {
    return {
      show: false,
      scrollTop: 0
    };
  },
  watch: {
    show: function() {
      this.lockScroll();
    }
  },
  methods: {
    //通过对body设置position:fixed的方法阻止滚动,并通过动态设置scrollTop避免 在有滚动距离弹出时 回到顶底
    lockScroll() {
      if (this.show) {
        this.scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        document.body.classList.add("h-shade-show");
        document.body.style.top = -this.scrollTop + "px";
      } else {
        document.body.classList.remove("h-shade-show");
        if (window.pageYOffset) {
          window.pageYOffset = this.scrollTop;
        } else {
          document.documentElement.scrollTop = this.scrollTop;
        }
      }
    }
  }
};
</script>

<style lang="scss">
@import "../../../scss/var";
.h-shade {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: black;
  z-index: $shade-index;
}
body.h-shade-show {
  position: fixed;
  width: 100%;
}
</style>
