
<!-- 
使用说明:
1. loadmore不可以固定高度
2. 需在回调函数执行完后手动执行 组件里的dropback()函数，回复原始状态（this.$refs.loadmore.dropback()）
3. 如果关闭了autofill
 -->
<template>
  <div class="h-loadmore" ref="wrap">
    <div
      class="h-loadmore-content"
      @touchstart="start"
      @touchmove="move"
      @touchend="end"
      :class="transitionClass"
      :style="slideStyle"
      ref="content"
    >
      <!-- top信息 -->
      <div class="h-loadmore-tip h-loadmore-top" ref="top" v-show="!topHide && slideY!==0">
        <slot name="top">
          <p class="h-loadmore-top-text">{{topText}}</p>

          <spinner v-if="topStatus=='load'" class="h-load-more-loadicon" size="0.5"></spinner>
          <i
            v-else
            class="iconfont icon-xiangxia h-loadmore-top-icon"
            :class="{'h-loadmore-top-icon-rotate': topIconRotate}"
          ></i>
        </slot>
      </div>

      <slot></slot>

      <!-- bot信息 -->
      <div class="h-loadmore-tip h-loadmore-bot" ref="bot" v-show="!bottomHide && slideY!==0">
        <slot name="bot">
          <spinner v-if="botStatus=='load'" class="h-load-more-loadicon" size="0.5"></spinner>
          <i
            v-else
            class="iconfont icon-xiangshang h-loadmore-bot-icon"
            :class="{'h-loadmore-bot-icon-rotate': botIconRotate}"
          ></i>

          <p class="h-loadmore-bot-text">{{botText}}</p>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import Spinner from "./spinner/Spinner.vue";
import shade from "./mixin/shade/shade.js";
export default {
  name: "h-loadmore",
  components: {
    Spinner
  },
  mixins: [shade], //引入遮罩层，为了在加载时不被点击或移动
  props: {
    topHide: {
      type: Boolean,
      default: false
    },
    bottomHide: {
      type: Boolean,
      default: false
    },
    topPullText: {
      type: String,
      default: "下拉刷新"
    },
    topDropText: {
      type: String,
      default: "释放刷新"
    },
    topLoadText: {
      type: String,
      default: "加载中..."
    },
    topDistance: {
      type: Number,
      default: 200
    },
    topFn: {
      type: Function
    },
    botPullText: {
      type: String,
      default: "上拉刷新"
    },
    botDropText: {
      type: String,
      default: "释放刷新"
    },
    botLoadText: {
      type: String,
      default: "加载中..."
    },
    botDistance: {
      type: Number,
      default: 200
    },
    botFn: {
      type: Function
    },
    autoFill: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      direction: null,
      // topShow: true,
      // botShow: true,
      topStatus: "pull",
      botStatus: "pull",
      topText: this.topPullText,
      topIconRotate: false,
      topHeight: 0,
      botText: this.botPullText,
      botIconRotate: false,
      botHeight: 0,
      startY: 0,
      slideY: 0,
      filled: false //是否填满容器
    };
  },
  computed: {
    transitionClass() {
      return this.slideY == 0 ||
        this.slideY == this.topHeight ||
        this.slideY == -this.botHeight
        ? "h-loadmore-transition"
        : "h-loadmore-transition-none";
    },
    slideStyle() {
      return {
        transform: `translate3d(0,${this.slideY}px,0)`
      };
    }
  },
  watch: {
    topStatus: function() {
      this.$emit("top-status-change", this.topStatus);
      switch (this.topStatus) {
        case "pull":
          this.topPullHandle();
          break;
        case "drop":
          this.topDropHandle();
          break;
        case "load":
          this.topLoadHandle();
          break;
        default:
          break;
      }
    },
    botStatus: function() {
      this.$emit("bot-status-change", this.botStatus);
      switch (this.botStatus) {
        case "pull":
          this.botPullHandle();
          break;
        case "drop":
          this.botDropHandle();
          break;
        case "load":
          this.botLoadHandle();
          break;
        default:
          break;
      }
    }
  },
  mounted() {
    if (this.autoFill) this.fill();
    this.setTopHeight();
    this.setBotHeight();
  },
  methods: {
    setTopHeight() {
      let el = this.$slots.top ? this.$slots.top[0].elm : this.$refs.top;
      this.topHeight = +getComputedStyle(el).height.slice(0, -2);
    },
    setBotHeight() {
      let el = this.$slots.bot ? this.$slots.bot[0].elm : this.$refs.bot;
      this.botHeight = +getComputedStyle(el).height.slice(0, -2);
    },

    start(e) {
      this.setPullStatus();
      let touch = e.changedTouches[0];
      this.startY = touch.pageY;
    },
    move(e) {
      let touch = e.changedTouches[0];
      //使用pageY出现滚动条的时候，pageY值不变!因此不用考虑滚动和touchmove冲突的问题
      this.slideY = touch.pageY - this.startY;
      //需要在触发loadmore的时候，阻止scroll，否则当往回移动时，会位置错误（后续解决）;
      // if(this.topStatus!='load' && this.slideY>0) e.preventDefault();
      this.direction = this.slideY > 0 ? "slideDown" : "slideUp";
      this.changeStatus();
    },
    end() {
      this.load();
    },
    setPullStatus() {
      this.topStatus = "pull";
      this.botStatus = "pull";
    },
    changeStatus() {
      this.topStatus =
        Math.abs(this.slideY) >= this.topDistance ? "drop" : "pull";
      this.botStatus =
        Math.abs(this.slideY) >= this.botDistance ? "drop" : "pull";
    },
    load() {
      if (this.direction == "slideDown" && this.slideY >= this.topDistance) {
        //下拉加载
        if (this.topFn) {
          this.topStatus = "load";
          this.topFn();
        } else {
          this.dropback();
          console.warn("请传入topFn参数");
        }
      } else if (
        this.direction == "slideUp" &&
        -this.slideY >= this.topDistance
      ) {
        //上拉加载
        if (this.botFn) {
          this.botStatus = "load";
          this.botFn();
        } else {
          this.dropback();
          console.warn("请传入botFn参数");
        }
      } else {
        //不够距离则回弹
        this.dropback();
      }
    },
    dropback() {
      if (this.autoFill) this.fill();
      this.setPullStatus();
      this.slideY = 0;
      this.closeShade();
    },
    topPullHandle() {
      this.topText = this.topPullText;
      this.topIconRotate = false;
    },
    topDropHandle() {
      this.topText = this.topDropText;
      this.topIconRotate = true;
    },
    topLoadHandle() {
      this.openShade(0);
      this.$nextTick(() => {
        this.setTopHeight();
        this.slideY = this.topHeight;
        this.topText = this.topLoadText;
      });
    },
    botPullHandle() {
      this.botText = this.botPullText;
      this.botIconRotate = false;
    },
    botDropHandle() {
      this.botText = this.botDropText;
      this.botIconRotate = true;
    },
    botLoadHandle() {
      this.openShade(0);
      this.$nextTick(() => {
        this.setBotHeight();
        this.slideY = -this.botHeight;
        this.botText = this.botLoadText;
      });
    },
    fill() {
      this.$nextTick(() => {
        let wrapBot = this.$refs.wrap.getBoundingClientRect().bottom;
        let winHei = document.documentElement.clientHeight;
        if (wrapBot < winHei) {
          this.filled = false;
          this.botStatus = "load";
          this.botFn();
        } else {
          this.filled = true;
        }
      });
    }
  }
};
</script>

<style lang="scss">
@import "../scss/var";
@import "../scss/mixin";

.h-loadmore {
  overflow: hidden;
  .h-loadmore-content {
    position: relative;
    .h-loadmore-tip {
      position: absolute;
      width: 100%;
      @include flex-column-center;
    }
    .h-loadmore-top {
      top: 0;
      transform: translate3d(0, -100%, 0);
    }
    .h-loadmore-bot {
      bottom: 0;
      transform: translate3d(0, 100%, 0);
    }
    .h-loadmore-top-text {
      padding-bottom: 0.2rem;
      font-size: 0.24rem;
    }
    .h-loadmore-bot-text {
      padding-top: 0.2rem;
      font-size: 0.24rem;
    }
    .h-loadmore-top-icon,
    .h-loadmore-bot-icon {
      font-size: 1em;
      display: block;
      transition: transform 0.3s;
    }
    .h-loadmore-top-icon-rotate,
    .h-loadmore-bot-icon-rotate {
      transform: rotate(180deg);
    }
  }

  .h-loadmore-transition {
    transition: transform 0.3s;
  }
  .h-loadmore-transition-none {
    transition: none;
  }
}
</style>
