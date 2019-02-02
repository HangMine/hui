<template>
  <transition name="opacity">
      <div 
        class="h-load"
        v-if="show"
      >
        <spinner :type="type"></spinner>
        <span v-if="text" class="h-load-text">{{text}}</span>
      </div>
  </transition>
</template>

<script>
import shade from "../mixin/shade/shade.js";
export default {
  name: "h-load",
  mixins: [shade],
  props: {
    text: String,
    type: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      show: false
    };
  }
};
</script>

<style lang="scss">
@import "../../scss/var";
@import "../../scss/mixin";
.h-load {
  position: fixed;
  z-index: $load-index;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  @include flex-column-center;
  padding: 0.3rem;
  background: rgba(0, 0, 0, 0.7);
  color: $color-gray;
  font-size: 0.28rem;
  border-radius: 0.08rem;
  .h-load-text {
    color: white;
    padding: 0.3rem 0.2rem 0 0.2rem;
  }
}
</style>
