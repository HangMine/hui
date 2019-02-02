<template>
    <span 
        class="h-badge"
        :class="`is-${type} is-${size}`"
        :style="{'background-color':color}"
    >
        <slot></slot>
    </span>
</template>

<script>
export default {
  name: "h-badge",
  props: {
    type: {
      type: String,
      default: "error"
    },
    size: {
      type: String,
      default: "normal"
    },
    color: String
  }
};
</script>

<style lang="scss">
@import "../scss/var";
.h-badge {
  display: inline-block;
  color: $color-white;
}
//type
.h-badge.is-error {
  background-color: $error-color;
}
.h-badge.is-success {
  background-color: $success-color;
}
.h-badge.is-warning {
  background-color: $warning-color;
}
.h-badge.is-primary {
  background-color: $color-blue;
}
//size
.h-badge.is-small {
  font-size: 0.24rem;
  border-radius: 0.24rem;
  padding: .02rem 0.11rem;
}
.h-badge.is-normal {
  font-size: 0.26rem;
  border-radius: 0.26rem;
  padding: .04rem 0.14rem;
}
.h-badge.is-large {
  font-size: 0.28rem;
  border-radius: 0.28rem;
  padding: .06rem 0.18rem;
}
</style>
