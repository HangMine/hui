<template>
  <transition :name="`popup-${position}`">
      <div 
        class="h-popup" 
        :class="`is-${position}`"
        v-show="show"
      >
          <slot></slot>
      </div>
  </transition>
</template>

<script>
import shade from "./mixin/shade/shade.js";
export default {
  name: "h-popup",
  mixins: [shade],
  props: {
    value: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: "middle"
    },
    shade: {
      type: Boolean,
      default: true
    },
    closeOnClickShade: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      show: this.value
    };
  },
  watch: {
    value: function() {
      this.show = this.value;
    },
    show: function() {
      this.$emit("input", this.show);
      //显示遮罩层
      this.shadeIsShow();
    }
  },
  methods: {
    shadeIsShow() {
      if (!this.shade) return;
      if (this.show) {
        this.openShade();
      } else {
        this.closeShade();
      }
    }
  }
};
</script>

<style lang="scss">
@import "../scss/var";
.h-popup {
  position: fixed;
  transition: all 0.3s;
  z-index: $msg-box-index;
}
.h-popup.is-middle {
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
}
.h-popup.is-top {
  left: 50%;
  top: 0;
  transform: translate3d(-50%, 0, 0);
}
.h-popup.is-bottom {
  left: 50%;
  bottom: 0;
  transform: translate3d(-50%, 0, 0);
}
.h-popup.is-left {
  left: 0;
  top: 50%;
  transform: translate3d(0, -50%, 0);
}
.h-popup.is-right {
  right: 0;
  top: 50%;
  transform: translate3d(0, -50%, 0);
}
</style>
