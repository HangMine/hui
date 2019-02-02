<template>
    <div class="h-tab-container-item" v-show="isShow">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: "h-tab-container-item",
  props: {
    id: [String, Number]
  },
  computed: {
    isShow() {
      return this.$parent.showItem || this.$parent.value == this.id;
    }
  }
};
</script>

<style lang="scss">
.h-tab-container-item {
  width: 100%;
  flex-shrink: 0;
}
</style>
