<template>
    <div class="h-nav-bar">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: "h-nav-bar",
  props: {
    value: {
      type: [String, Number]
    }
  },
  data() {
    return {
      currentValue: null
    };
  },
  watch: {
    value: {
      handler: function() {
        this.currentValue = this.value;
      },
      immediate: true
    },
    currentValue: {
      handler: function() {
        this.$emit("input", this.currentValue);
      },
      immediate: true
    }
  }
};
</script>

<style lang="scss">
@import "../scss/var";
.h-nav-bar {
  width: 100%;
  display: flex;
  background: $color-white;
  > .h-tab-item {
    border-bottom: 0.04rem solid transparent;
    font-size: .24rem;
  }
  > .h-tab-item.is-active {
    border-bottom-color: $color-blue;
    .h-tab-text {
      padding: 0.2rem;
      color: $color-blue;
    }
  }
}
</style>
