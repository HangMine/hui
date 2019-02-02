<template>
  <div class="h-cell-swipe">
    <h-cell
      :to="to"
      :title="title"
      :value="value"
      :icon="icon"
      :label="label"
      :isLink="isLink"
      @touchstart.native="start"
      @touchmove.native="move"
      @touchend.native="end"
      :class="transitionClass"
      :style="slideStyle"
      v-clickoutside:touchstart="swipe"
    >
      <div class="h-cell-swipe-btn h-cell-swipe-right-btn" slot="right" ref="right">
        <div
          v-for="(btn,index) of right"
          :key="index"
          class="btn-item"
          :style="btn.style"
          @touchstart="btn.fn && btn.fn()"
        >{{btn.content}}</div>
      </div>

      <div class="h-cell-swipe-btn h-cell-swipe-left-btn" slot="left" ref="left">
        <div
          v-for="(btn,index) of left"
          :key="index"
          class="btn-item"
          :style="btn.style"
          @touchstart="btn.fn && btn.fn()"
        >{{btn.content}}</div>
      </div>
    </h-cell>
  </div>
</template>

<script>
import HCell from "./Cell.vue";
import Clickoutside from "../js/clickoutside.js";
export default {
  name: "h-cell-swipe",
  components: {
    HCell
  },
  directives: {
    Clickoutside
  },
  props: {
    to: String,
    title: String,
    value: String,
    icon: String,
    label: String,
    isLink: {
      type: Boolean,
      default: false
    },
    right: {
      type: Array,
      default: function() {
        return [
          {
            content: "标记",
            style: { background: "gray", color: "white" },
            fn() {
              console.log(this.content);
            }
          },
          {
            content: "删除",
            style: { background: "red", color: "white" },
            fn() {
              console.log(this.content);
            }
          }
        ];
      }
    },
    left: Array
  },
  data() {
    return {
      moving: false,
      strechRatio: 2, //滑动超过1/2即展开
      leftWidth: 0,
      rightWidth: 0,
      startX: 0,
      startY: 0,
      slideX: 0
    };
  },
  computed: {
    transitionClass() {
      return this.moving ? "h-cell-transition-none" : "h-cell-transition";
    },
    slideStyle() {
      return {
        transform: `translate3d(${this.slideX}px,0,0)`
      };
    },
    direction() {
      return this.slideX == 0 || this.slideX == this.rightWidth
        ? null
        : this.slideX < 0
        ? "slideLeft"
        : "slideRight";
    }
  },
  mounted() {
    // this.setLeftWidth();
    this.setRightWidth();
  },
  methods: {
    start(e) {
      let touch = e.changedTouches[0];
      this.startX = touch.pageX;
      this.startY = touch.pageY;
      this.moving = true;
    },
    move(e) {
      if (!this.moving) return;
      if (this.checkXYScale(e)) return;
      e.preventDefault();
      e.stopPropagation();
      this.setSlideX(e);
    },
    checkXYScale(e) {
      let touch = e.changedTouches[0];
      const offsetTop = touch.pageY - this.startY;
      const offsetLeft = touch.pageX - this.startX;
      const y = Math.abs(offsetTop);
      const x = Math.abs(offsetLeft);
      if (x < 5 || (x >= 5 && y >= x * 1.73)) {
        //符合条件则不继续执行
        return true;
      } else {
        return false;
      }
    },
    end() {
      if (this.direction == "slideLeft") {
        if (-this.slideX > this.rightWidth / 2) {
          this.swipe(-this.rightWidth);
        } else {
          this.swipe();
        }
      }
      if (this.direction == "slideRight") {
        if (this.slideX > this.rightWidth / 2) {
          this.swipe(this.rightWidth);
        } else {
          this.swipe();
        }
      }
    },
    setRightWidth() {
      this.rightWidth = this.$refs.right.offsetWidth;
    },
    // setLeftWidth() {
    //   this.leftWidth = this.$refs.left.offsetWidth;
    // },
    setSlideX(e) {
      this.slideX = e.changedTouches[0].pageX - this.startX;
      //左滑最大距离
      if (this.direction == "slideLeft" && -this.slideX > this.rightWidth) {
        this.moving = false;
        this.slideX = -this.rightWidth;
      }
      //右滑最大距离
      if (this.direction == "slideRight" && this.slideX > this.leftWidth) {
        this.moving = false;
        this.slideX = this.leftWidth;
      }
    },
    swipe(x = 0) {
      this.moving = false;
      this.slideX = x;
    }
  }
};
</script>

<style lang="scss">
@import "../scss/mixin";
.h-cell-swipe {
  overflow: hidden;
  //修改cell组件样式
  .h-cell {
    border-top: none;
  }

  .h-cell-swipe-btn {
    min-height: inherit;
    display: flex;
    .btn-item {
      min-height: inherit;
      @include flex-center;
      padding: 0 0.2rem;
    }
  }

  .h-cell-transition {
    transition: transform 0.15s;
  }
  .h-cell-transition-none {
    transition: none;
  }
}
</style>
