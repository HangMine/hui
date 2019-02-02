<template>
  <div class="h-palette-button-wrap" :class="{'is-expand':expanded}" @touchstart="toggle">
    <div class="h-palette-button-logo">
      <slot name="logo">
        <i class="h-iconfont icon-jiahao h-palette-button-default"></i>
      </slot>
    </div>

    <ul v-show="expanded" class="h-palette-button">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
import { once } from "../js/dom.js";
export default {
  name: "h-palette-button",
  props: {
    direction: {
      type: String,
      default: "lt"
    },
    radius: {
      type: Number,
      default: 100
    },
    //单位ms
    itemDelay: {
      type: Number,
      default: 30
    }
  },
  data() {
    return {
      expanded: false
    };
  },
  methods: {
    toggle() {
      if (!this.expanded) {
        this.expand();
      } else {
        this.collapse();
      }
    },
    expand() {
      this.expanded = true;
      //在h-palette-button显示后才有动态效果，必须使用setTimeout(有什么好的解决方法，否则settimeout值用多少。？)
      setTimeout(() => {
        this.setPosition();
      }, 100);
    },
    collapse() {
      this.resetPosition();
    },
    setPosition() {
      let splitNum = this.$children.length - 1;
      let directionAngle = this.getDirectionAngle();
      let angle = directionAngle / splitNum;
      let offsetAngle = this.getOffsetAngle();

      this.$children.forEach((child, i) => {
        child.$el.style.transitionDelay = `${i * this.itemDelay}ms`;
        child.$el.classList.add("is-rotate");
        let x = this.radius * Math.cos(angle * i + offsetAngle).toFixed(2);
        let y = this.radius * Math.sin(angle * i + offsetAngle).toFixed(2);
        child.$el.style.left = `calc(50% + ${x}px)`;
        child.$el.style.top = `calc(50% + ${y}px)`;
      });
    },
    resetPosition() {
      this.$children.forEach((child, i) => {
        child.$el.classList.remove("is-rotate");
        child.$el.style.top = "50%";
        child.$el.style.left = "50%";
        //由于每个item弹出设置了delay,需设置在最后一个Item动画结束后隐藏元素
        if (i == this.$children.length - 1) {
          once(child.$el, "transitionend", () => {
            this.expanded = false;
          });
        }
      });
    },
    //获取不同方向的角度
    getDirectionAngle() {
      return ["lt", "lb", "rt", "rb"].indexOf(this.direction) == -1
        ? Math.PI
        : Math.PI / 2;
    },
    //获取不同方向的角度偏移量
    getOffsetAngle() {
      switch (this.direction) {
        case "rb":
          return 0;
          break;
        case "lb":
          return Math.PI / 2;
          break;
        case "lt":
          return Math.PI;
          break;
        case "rt":
          return (Math.PI * 3) / 2;
          break;
        case "b":
          return 0;
          break;
        case "l":
          return Math.PI / 2;
          break;
        case "t":
          return Math.PI;
          break;
        case "r":
          return (Math.PI * 3) / 2;
          break;

        default:
          break;
      }
    }
  }
};
</script>

<style lang="scss">
@import "../scss/mixin";
@import "../scss/ani";
.h-palette-button-wrap {
  position: relative;
  z-index: 1;
  @include flex-center;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
  color: white;

  &.is-expand {
    animation: palette-button-bounce 0.5s ease-in-out;
  }

  .h-palette-button-logo {
    position: relative;
    z-index: 1;

    .h-palette-button-default {
      font-size: 0.7rem;
    }
  }
  .h-palette-button {
    position: absolute;
    z-index: 0;
  }
}
</style>
