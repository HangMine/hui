<template>
    <div class="spinner-snake" :style="[style]"></div>
</template>

<script>
export default {
  name: "spinner-snake",
  props: {
    size: {
      type: [Number,String],
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
        height: `${+this.size}rem`,
        "border-width": `${+this.size / 6.5}rem`,
        "border-color": this.color,
        "border-top-color": "transparent"
      };
    }
  }
};
</script>

<style lang="scss">
@import "../../scss/var";
@import "../../scss/ani";
.spinner-snake {
  border-style: solid;
  border-radius: 50%;
  border-color: $color-gray;
  animation: spinner-snake 1s infinite linear;
}
</style>

