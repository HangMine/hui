<template>
    <div class="spinner-fading-circle" :style="style">
      <div 
        v-for="item of 12" 
        :key="item" 
        class="spinner-fading-circle-item"
        :class="[`circle-item-${item}`]"
      >
      <!-- mint ui 此处用的是伪元素，由于需要设置颜色，这里使用div -->
        <div class="spinner-fading-circle-item-dot" :style="dotStyle"></div>
      </div>
    </div>
</template>

<script>
export default {
  name: "spinner-fading-circle",
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
    dotStyle() {
      return {
        "background-color": this.color
      };
    }
  }
};
</script>

<style lang="scss">
@import "../../scss/var";
@import "../../scss/ani";
.spinner-fading-circle {
  position: relative;
  .spinner-fading-circle-item {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    animation: spinner-fading-circle 1.2s infinite ease-in-out;
    .spinner-fading-circle-item-dot {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 15%;
      height: 15%;
      background-color: $color-gray;
    }
  }

  .circle-item-1 {
    transform: rotate(30deg);
  }
  .circle-item-2 {
    transform: rotate(60deg);
    animation-delay: -1.1s;
  }
  .circle-item-3 {
    transform: rotate(90deg);
    animation-delay: -1s;
  }
  .circle-item-4 {
    transform: rotate(120deg);
    animation-delay: -0.9s;
  }
  .circle-item-5 {
    transform: rotate(150deg);
    animation-delay: -0.8s;
  }
  .circle-item-6 {
    transform: rotate(180deg);
    animation-delay: -0.7s;
  }
  .circle-item-7 {
    transform: rotate(210deg);
    animation-delay: -0.6s;
  }
  .circle-item-8 {
    transform: rotate(240deg);
    animation-delay: -0.5s;
  }
  .circle-item-9 {
    transform: rotate(270deg);
    animation-delay: -0.4s;
  }
  .circle-item-10 {
    transform: rotate(300deg);
    animation-delay: -0.3s;
  }
  .circle-item-11 {
    transform: rotate(330deg);
    animation-delay: -0.2s;
  }
  .circle-item-12 {
    transform: rotate(360deg);
    animation-delay: -0.1s;
  }
}
</style>

