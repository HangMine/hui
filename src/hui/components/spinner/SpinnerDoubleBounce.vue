<template>
    <div class="spinner-double-bounce" :style="style">
        <div 
            v-for="item of 2" 
            :key="item" 
            class="spinner-double-bounce-item"
            :class="`spinner-double-bounce-item-${item}`"
            :style="itemStyle"
        ></div>
    </div>
</template>

<script>
export default {
  name: "spinner-double-bounce",
  props: {
    size: {
      type: [Number, String],
      default: 0.64
    },
    color: {
      type: String
    }
  },
  computed: {
    style() {
      return {
        width: `${+this.size}rem`,
        height: `${+this.size}rem`
      };
    },
    itemStyle() {
      return {
        "background-color": this.color
      };
    }
  }
};
</script>

<style lang="scss">
@import '../../scss/var';
@import "../../scss/ani";
.spinner-double-bounce {
  position: relative;
  .spinner-double-bounce-item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: $color-gray;
    opacity: 0.6;
    animation: spinner-double-bounce 2s infinite ease-in-out;
  }
  .spinner-double-bounce-item-1 {
    animation-delay: -1s;
  }
}
</style>
