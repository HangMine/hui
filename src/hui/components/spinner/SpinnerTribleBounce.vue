<template>
    <div class="spinner-trible-bounce">
        <div 
            v-for="item of 3" 
            :key="item" 
            class="spinner-trible-bounce-item"
            :class="`spinner-trible-bounce-item-${item}`"
            :style="itemStyle"
        ></div>
    </div>
</template>

<script>
export default {
  name: "spinner-trible-bounce",
  props: {
    size: {
      type: [Number, String],
      default: 0.2
    },
    color: {
      type: String
    }
  },
  computed: {
    itemStyle() {
      return {
        width: `${+this.size}rem`,
        height: `${+this.size}rem`,
        margin: `${+this.size / 3}rem`,
        "background-color": this.color
      };
    }
  }
};
</script>

<style lang="scss">
@import "../../scss/var";
@import "../../scss/ani";
.spinner-trible-bounce {
  .spinner-trible-bounce-item {
    display: inline-block;
    border-radius: 50%;
    background-color: $color-gray;
    animation: spinner-trible-bounce 1.4s infinite ease-in-out;
  }
  .spinner-trible-bounce-item-1 {
    animation-delay: -0.32s;
  }
  .spinner-trible-bounce-item-2 {
    animation-delay: -0.16s;
  }
}
</style>
