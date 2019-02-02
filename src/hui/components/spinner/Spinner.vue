<template>
    <div class="spinner">
        <spinner-snake v-if="type=='snake' || type==0" :size="size" :color="color"></spinner-snake>
        <spinner-fading-circle v-if="type=='fading-circle' || type==1" :size="size" :color="color"></spinner-fading-circle>
        <spinner-trible-bounce v-if="type=='trible-bounce' || type==2" :size="size" :color="color"></spinner-trible-bounce>
        <spinner-double-bounce v-if="type=='double-bounce' || type==3" :size="size" :color="color"></spinner-double-bounce>
    </div>
</template>

<script>
import SpinnerSnake from "./SpinnerSnake.vue";
import SpinnerFadingCircle from "./SpinnerFadingCircle.vue";
import SpinnerTribleBounce from "./SpinnerTribleBounce.vue";
import SpinnerDoubleBounce from "./SpinnerDoubleBounce.vue";
export default {
  name: "spinner",
  components: {
    SpinnerSnake,
    SpinnerFadingCircle,
    SpinnerTribleBounce,
    SpinnerDoubleBounce
  },
  props: {
    type: {
      type: [String,Number],
      default: "snake"
    },
    size: {
      type: [Number, String]
    },
    color: {
      type: String
    }
  }
};
</script>

<style lang="scss">
</style>
