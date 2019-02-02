<template>
  <div class="h-tab-container-wrap">
    <div
      class="h-tab-container"
      :style="transform"
      @touchstart="start"
      @touchmove="move"
      @touchend="end"
      @transitionend="transitionend"
      ref="container"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "h-tab-container",
  props: {
    value: [String, Number]
  },
  data() {
    return {
      containerWidth: 0,
      currentValue: this.value,
      index: 0,
      lastIndex: 0,
      startX: 0,
      startY: 0,
      slideX: 0,
      offsetX: 0,
      swipeScale: 0.5,
      showItem: false //决定item是否显示，为true全部显示
    };
  },
  computed: {
    transform() {
      return {
        transform: this.showItem ? `translate3d(${this.offsetX}px,0,0)` : ""
      };
    }
  },
  watch: {
    value: function() {
      //当传进来的id改变时，对应改变index
      this.currentValue = this.value;
      this.setIndex();
    },
    currentValue: function() {
      this.$emit("input", this.currentValue);
    },
    index: function() {
      //当index改变时,触发swipe
      this.setCurrentValue();
      this.swipe();
    }
  },
  mounted() {
    this.setContainerWidth();
  },
  methods: {
    setContainerWidth() {
      this.containerWidth = this.$refs.container.offsetWidth;
    },
    setIndex() {
      this.setLastIndex();
      this.index = this.$children.findIndex(item => item.id == this.value);
    },
    setLastIndex() {
      this.lastIndex = this.index;
    },
    setCurrentValue() {
      this.currentValue = this.$children[this.index].id;
    },
    setTransition() {
      this.$refs.container.classList.remove("transition-none");
    },
    stopTransition() {
      this.$refs.container.classList.add("transition-none");
    },
    start(e) {
      let touch = e.changedTouches[0];
      this.startX = touch.pageX;
      this.startY = touch.pageY;
      this.stopTransition();
    },
    move(e) {
      if (!this.check(e)) return;
      e.preventDefault();
      this.showItem = true;
      let touch = e.changedTouches[0];
      this.slideX = touch.pageX - this.startX;
      this.offsetX = -(this.index * this.containerWidth) + this.slideX;
    },
    check(e) {
      let touch = e.changedTouches[0];
      const offsetTop = touch.pageY - this.startY;
      const offsetLeft = touch.pageX - this.startX;

      //检查第一页和最后一页
      if (
        (this.index == 0 && offsetLeft > 0) ||
        (this.index == this.$children.length - 1 && offsetLeft < 0)
      ) {
        return false;
      }

      //检查滑动X和Y的比例
      const y = Math.abs(offsetTop);
      const x = Math.abs(offsetLeft);
      if (x < 5 || (x >= 5 && y >= x * 1.73)) {
        return false;
      } else {
        return true;
      }
    },
    end() {
      if (-this.slideX > this.containerWidth * this.swipeScale) {
        this.next();
      } else if (this.slideX > this.containerWidth * this.swipeScale) {
        this.prev();
      } else {
        //this.slideX为0时不执行:由于通过Index跳转时提前设置了offsetX并且延迟滑动，所以必须添加此判断
        if (this.slideX) this.swipe();
      }
    },
    transitionend() {
      this.stopTransition();
      this.showItem = false;
    },
    next() {
      this.index == this.$children.length - 1 ? this.index : this.index++; //这里++为什么不能换成+1 ？
    },
    prev() {
      this.index == 0 ? this.index : this.index--;
    },
    swipe() {
      //如果是通过index跳转。则需要传入lastIndex，记录上次的offsetX距离。以保证左右滑动效果(现在有bug:通过点击切换到其它页面后点击页面异常)
      this.indexSwipeHandle();
      //这里必须使用setTimeout保证上一次的offsetX已经到位(用nextTick有一次不生效)
      setTimeout(() => {
        this.setTransition();
        this.offsetX = -this.index * this.containerWidth;
        this.slideX = 0;
      }, 50);
    },
    indexSwipeHandle() {
      if (!this.showItem) {
        this.stopTransition();
        this.offsetX = -this.lastIndex * this.containerWidth;
        this.showItem = true;
      }
    }
  }
};
</script>

<style lang="scss">
.h-tab-container-wrap {
  overflow: hidden;
  .h-tab-container {
    display: flex;
    transition: transform 0.3s;
  }
  .transition-none {
    transition: none;
  }
}
</style>
