<template>
    <li class="h-palette-button-item"><slot></slot></li>
</template>

<script>
export default {
  name: "h-palette-button-item"
};
</script>

<style lang="scss">
@import "../scss/mixin";
.h-palette-button-item {
  @include flex-center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0);
  width: 0.3rem;
  height: 0.3rem;
  padding: .2rem;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
  transition: all 0.2s
}
.h-palette-button-item.is-rotate {
  transform: translate(-50%, -50%) rotate(720deg);
}
</style>
