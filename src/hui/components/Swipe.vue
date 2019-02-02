<template>
  <div class="h-swipe-wrap" @touchstart="start" @touchmove.stop.prevent="move" @touchend="end">
    <ul class="h-swipe" :class="transition" :style="transform">
      <slot></slot>
    </ul>

    <ul class="h-swipe-indicator" v-if="indicator">
      <li
        v-for="n of childrenLength"
        :key="n"
        :class="[indicatorClass,n-1 == index?indicatorActiveClass:'']"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "h-swipe",
  props: {
    //滑动超过1/2过页，否则回弹
    swipeScale: {
      type: Number,
      default: 1 / 2
    },
    auto: {
      type: Number,
      default: 2000
    },
    indicator: {
      type: Boolean,
      default: true
    },
    indicatorClass: {
      type: String,
      default: "h-swipe-indicator-item"
    },
    indicatorActiveClass: {
      type: String,
      default: "is-active"
    }
  },
  data() {
    return {
      pageWidth: 0,
      childrenLength: 0,
      index: 0,
      startX: 0,
      slideX: 0,
      offsetX: 0,
      moving: false,
      timer: null,
      time: null //记录从start到end的时间，如果短时间且超过一定距离直接过页，不考虑swipeScale
    };
  },
  computed: {
    transform() {
      return { transform: `translate3d(${this.offsetX}px,0,0)` };
    },
    transition() {
      return this.moving ? "h-swipe-transition-none" : "h-swipe-transition";
    }
  },
  mounted() {
    this.setItemWidth();
    this.setPageWidth();
    this.setChildrenLenth();
    this.setAuto();
  },
  methods: {
    setPageWidth() {
      this.pageWidth = this.$el.offsetWidth;
    },
    setItemWidth() {
      this.$children.forEach(child => {
        child.$el.style.width = `${this.$el.offsetWidth}px`;
      });
    },
    setChildrenLenth() {
      this.childrenLength = this.$children.length;
    },
    setAuto() {
      //如果auto为0,不设置定时器
      if (!this.auto) return;

      this.timer = setInterval(() => {
        this.next();
      }, this.auto);
    },
    clearAuto() {
      clearInterval(this.timer);
    },
    start(e) {
      let touch = e.changedTouches[0];
      this.startX = touch.pageX;
      this.moving = true;
      this.clearAuto();
      this.time = new Date();
    },
    move(e) {
      let touch = e.changedTouches[0];
      this.slideX = touch.pageX - this.startX;
      this.offsetX = -this.index * this.pageWidth + this.slideX;
    },
    end() {
      this.moving = false;
      this.setAuto();

      //判断slideTime--滑动时间少于300ms，滑动距离大于50
      let slideTime = new Date() - this.time;
      if (slideTime < 300 && this.slideX < -50) {
        this.next();
        return;
      }
      if (slideTime < 300 && this.slideX > 50) {
        this.prev();
        return;
      }

      //判断滑动距离
      let isOver = Math.abs(this.slideX) > this.pageWidth * this.swipeScale;
      if (!isOver) {
        this.swipe();
        return;
      }
      if (this.slideX < 0 && isOver) {
        this.next();
      } else {
        this.prev();
      }
    },
    next() {
      this.index = this.index == this.$children.length - 1 ? 0 : this.index + 1;
      this.swipe();
    },
    prev() {
      this.index = this.index == 0 ? this.$children.length - 1 : this.index - 1;
      this.swipe();
    },
    swipe() {
      this.offsetX = -this.index * this.pageWidth;
    }
  }
};
</script>

<style lang="scss">
.h-swipe-wrap {
  position: relative;
  overflow: hidden;
  .h-swipe {
    display: flex;
  }
  .h-swipe-indicator {
    position: absolute;
    bottom: 0.2rem;
    width: 100%;
    display: flex;
    justify-content: center;
    .h-swipe-indicator-item {
      width: 0.15rem;
      height: 0.15rem;
      border: 1px solid gray;
      border-radius: 50%;
      margin: 0.05rem;
    }
    .h-swipe-indicator-item.is-active {
      border-radius: 0;
      border: none;
      border-bottom: 1px solid gray;
    }
  }
}
.h-swipe-transition {
  transition: transform 0.3s;
}
.h-swipe-transition-none {
  transition: none;
}
</style>
