<template>
<div class="h-progress-wrap">
    <slot name="left"></slot>
    <div class="h-progress" :style="[heightStyle,borderRadiusStyle]">
        <div class="h-progress-fill" :style="[widthStyle,borderRadiusStyle]"></div>
        <slot></slot>
    </div>
    <slot name="right"></slot>
</div>
</template>

<script>
export default {
  name: "h-progress",
  props: {
    value: {
      type: [Number, String],
      default: 50
    },
    height: {
      type: [Number, String],
      default: 0.05
    }
  },
  data() {
    return {
      currentValue: this.value
    };
  },
  computed: {
    widthStyle() {
      return { width: `${this.value}%` };
    },
    heightStyle() {
      return {
        height: typeof this.height == "string" ? this.height : `${this.height}rem`
      };
    },
    borderRadiusStyle() {
      return {
        "border-radius":
          typeof this.height == "string" ? this.height : `${this.height}rem`
      };
    }
  },
  watch: {
    value: function() {
      this.currentValue = this.value;
    },
    currentValue: function() {
      this.$emit("input", this.currentValue);
    }
  }
};
</script>

<style lang="scss">
@import "../scss/var";
.h-progress-wrap {
  display: flex;
  align-items: center;
  .h-progress {
    position: relative;
    flex: 1;
    background-color: #ebebeb;
    .h-progress-fill {
      background-color: $color-blue;
      height: 100%;
    }
  }
}
</style>
