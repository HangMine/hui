<template>
  <h-progress :height="height" v-model="currentValue" class="h-range" ref="progress">
    <div
      class="h-range-core"
      :class="{'is-disabled':disabled}"
      :style="leftStyle"
      @touchstart="start"
      @touchmove.stop="move"
      @touchend="end"
    ></div>
    <slot name="left" slot="left"></slot>
    <slot name="right" slot="right"></slot>
  </h-progress>
</template>

<script>
import Progress from "./Progress.vue";
export default {
  name: "h-range",
  components: {
    Progress
  },
  props: {
    value: [String, Number],
    height: {
      type: [Number, String],
      default: 0.05
    },
    step: {
      type: Number,
      default: 1
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentValue: this.value,
      temCurrentValue: this.currentValue, //记录滑动前的currentValue
      slidePercent: 0, //记录滑动的百分比
      range: this.max - this.min,
      progressWidth: 0,
      startX: 0,
      slideX: 0
    };
  },
  computed: {
    leftStyle() {
      return { left: `calc(${this.currentValue}% - 0.3rem)` };
    }
  },
  watch: {
    value: {
      handler: function(val) {
        //检查初始传入的值
        if (val < this.min) val = this.min;
        if (val > this.max) val = this.max;

        //将传入的值转换为百分比的值
        let percentValue = this.getPercentValue(val);
        this.currentValue = percentValue;
      },
      immediate: true
    },
    currentValue: function(val) {
      //将当前百分比的值转换为range设置的值
      let rangeValue = this.getRangeValue(val);
      this.$emit("input", rangeValue);
    }
  },
  mounted() {
    this.setProgressWidth();
  },
  methods: {
    checkLimitValue() {},
    setProgressWidth() {
      this.progressWidth = this.$refs.progress.$el.offsetWidth;
    },
    start(e) {
      let touch = e.changedTouches[0];
      this.startX = touch.pageX;
      this.temCurrentValue = this.currentValue;
    },
    move(e) {
      if (this.disabled) return;
      let touch = e.changedTouches[0];
      this.slideX = touch.pageX - this.startX;
      this.setSlidePercent();
      this.setCurrentValue();
    },
    end() {
      this.slideX = 0;
      this.temCurrentValue = this.currentValue;
    },
    setSlidePercent() {
      this.slidePercent = Math.round((this.slideX / this.progressWidth) * 100);
    },
    setCurrentValue() {
      let slidePercent = this.temCurrentValue + this.slidePercent;

      let currentValue =
        slidePercent < 0 ? 0 : slidePercent > 100 ? 100 : slidePercent;

      //将当前的百分比值转换为range设置的值
      let currentRangeValue = this.getRangeValue(currentValue);
      //关键计算:算出当前值一共多少步,用math.floor取整步数，再乘回来
      let stepCount = (currentRangeValue - this.min) / this.step;

      //将当前range设置的值转换回百分比的值
      this.currentValue =
        ((Math.floor(stepCount) * this.step) / this.range) * 100;
    },
    getPercentValue(val) {
      return Math.round(((+val - this.min) / this.range) * 100);
    },
    getRangeValue(val) {
      return Math.round(this.min + (this.range * val) / 100);
    }
  }
};
</script>

<style lang="scss">
@import "../scss/var";
.h-range {
  //必变progess样式
  .h-progress {
    margin: 0.3rem;
  }
}
.h-range-core {
  display: inline-block;
  vertical-align: middle;
  position: absolute;
  top: -0.3rem;
  width: 0.6rem;
  height: 0.6rem;
  background: white;
  box-shadow: 0 0.02rem 0.06rem rgba(0, 0, 0, 0.4);
  border-radius: 0.6rem;
  &.is-disabled {
    box-shadow: 0 0.02rem 0.06rem rgba(0, 0, 0, 0.2);
  }
}
</style>
