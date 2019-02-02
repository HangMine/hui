<template>
  <ul v-if="divider" class="h-picker-slot h-picker-divider" :class="transition" :style="transform">
    <li
      class="h-picker-slot-list is-active"
      :style="{height:`${$parent.lineHeight}px`}"
      ref="slotLine"
    >{{content}}</li>
  </ul>

  <ul
    v-else
    class="h-picker-slot"
    :class="transition"
    :style="transform"
    @touchstart="start"
    @touchmove.stop.prevent="move"
    @touchend="end"
  >
    <li
      v-for="(value,i) of values"
      :key="i"
      class="h-picker-slot-list"
      :class="[{'is-active':index==i},align?`is-${align}`:'']"
      :style="{height:`${$parent.lineHeight}px`}"
      ref="slotLine"
    >{{value}}</li>
  </ul>
</template>

<script>
export default {
  name: "h-picker-item",
  props: {
    values: Array,
    divider: {
      type: Boolean,
      default: false
    },
    content: {
      type: String,
      default: "-"
    },
    align: String,
    defaultIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      // $parent.lineHeight: 0,
      index: this.divider ? 0 : this.defaultIndex,
      startY: 0,
      slideY: 0,
      offsetY: 0,
      moving: false
    };
  },
  computed: {
    resOffsetY() {
      //根据disLine计算初始偏移高度
      let resDisLine = this.$parent.resDisLine;
      let offsetHeight = ((resDisLine - 1) / 2) * this.$parent.lineHeight;
      return this.offsetY + offsetHeight;
    },
    transform() {
      return {
        transform: `translate3d(0,${this.resOffsetY}px,0)`
      };
    },
    transition() {
      return this.moving ? "h-picker-transition-none" : "h-picker-transition";
    },
    chooseValue() {
      return this.values[this.index];
    }
  },
  watch: {
    values: {
      handler: function() {
        //datetimePicker改变日期长度时执行（当选择是最后一天时改变年月时会自动跳转日期）
        this.setIndex();
        this.offsetY = -this.index * this.$parent.lineHeight;
        if (!this.divider) this.set3D();
      },
      deep: true
    }
  },
  mounted() {
    this.swipe();
  },
  methods: {
    set3D() {
      let length = this.values.length;
      let topBotNum = (this.$parent.resDisLine - 1) / 2;
      let min = this.index - topBotNum;
      let max = this.index + topBotNum;
      if (min < 0) min = 0;
      if (max > length - 1) max = length - 1;

      let middle = -topBotNum;
      //如果是顶部，增加middle的初始值
      if (this.index < -middle) {
        let reduce = -middle - this.index;
        middle = middle + reduce;
      }

      this.$refs.slotLine.forEach((el, i) => {
        if (i < min || i > max) return;

        el.style.transform = `rotateX(${middle * 15}deg)`;

        //处理middle值

        //如果是底部,阻止后续继续增加middle
        if (this.index > length + middle) {
          let reduce = this.index - (length + middle);
          if (this.index == length - reduce) return;
        }

        middle++;
      });
    },
    start(e) {
      let touch = e.changedTouches[0];
      this.startY = touch.pageY;
      this.moving = true;
    },
    move(e) {
      let touch = e.changedTouches[0];
      this.slideY = touch.pageY - this.startY;
      this.offsetY = -this.index * this.$parent.lineHeight + this.slideY;
    },
    end() {
      this.moving = false;
      this.slideY = 0;
      this.setIndex();
      this.swipe();
    },
    swipe() {
      this.offsetY = -this.index * this.$parent.lineHeight;
      if (!this.divider) this.set3D();
      this.$emit("change");
    },
    setIndex() {
      let min = 0;
      let max = this.values.length - 1;

      this.index = Math.round(-this.offsetY / this.$parent.lineHeight);

      if (this.index < min) this.index = min;
      if (this.index > max) this.index = max;
    }
  }
};
</script>

<style lang="scss">
@import "../scss/var";
@import "../scss/mixin";
.h-picker-slot {
  flex: 1;
  text-align: center;
  &.h-picker-divider {
    flex: none;
  }
  .h-picker-slot-list {
    @include flex-center;
    padding: 0.1rem;
    color: $picker-color;
    &.is-active {
      color: $picker-active-color;
    }
    &.is-left {
      justify-content: flex-start;
    }
    &.is-right {
      justify-content: flex-end;
    }
  }
}
.h-picker-transition {
  transition: transform 0.3s;
}
.h-picker-transition-none {
  transition: none;
}
</style>
