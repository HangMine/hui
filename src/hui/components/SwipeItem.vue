<template>
    <li class="h-swipe-item">
        <slot></slot>
    </li>
</template>

<script>
export default {
  name: "h-swipe-item"
};
</script>

<style lang="scss">
.h-swipe-item {
  flex-shrink: 0;

  //解决img与基线对齐多出的几px的问题
  > a {
    display: block;
    > img {
      vertical-align: bototm;
    }
  }
}
</style>
