<template>
  <transition name="opacity">
      <div 
        class="h-msg"
        :class="[`is-${position}`,className]"
        v-if="show"
      >
        <i class="h-iconfont h-msg-icon" :class="icon" v-if="icon"></i>
        <span>{{msg}}</span>
      </div>
  </transition>
</template>

<script>
export default {
  name: "h-msg",
  props: {
    msg: String,
    duration: {
      type: Number,
      default: 2000
    },
    position: {
      type: String,
      default: "middle"
    },
    icon: {
      type: String
    },
    className:{
      type: String
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
@import "../../scss/ani";
.h-msg {
  // @include position("fixed", 50%, 50%);
  position: fixed;
  z-index: $msg-index;
  left: 50%;
  transform: translate(-50%, -50%);
  @include flex-column-center;
  padding: 0.25rem;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 0.28rem;
  border-radius: 0.08rem;
  .h-msg-icon{
    font-size: 1.5rem;
    padding-bottom: .2rem;
  }
}
.h-msg.is-top {
  top: 10%;
}
.h-msg.is-middle {
  top: 50%;
}
.h-msg.is-bottom {
  top: 90%;
}
</style>
