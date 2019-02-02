<template>
    <footer class="h-tab-bar" :class="{'is-fixed':fixed}">
        <slot></slot>
    </footer>
</template>

<script>
export default {
  name: "h-tab-bar",
  props: {
    value: {
      type: [String, Number]
    },
    fixed: {
      type: Boolean,
      default: true
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
.h-tab-bar {
  width: 100%;
  display: flex;
  background: $tab-bar-bg-color;
  border-top: 1px solid $border-color;
  &.is-fixed {
    position: fixed;
    bottom: 0;
    z-index: $header-footer-index;
  }
  > .h-tab-item.is-active {
    background: $tab-bar-active-color;
    .h-tab-text {
      color: $color-blue;
    }
    .h-tab-icon{
      color: $color-blue;
    }
  }
}
</style>
