<template>
    <header class="h-header" :class="{'is-fixed':fixed}">
        <div class="h-header-btn is-left">
            <slot name="left"></slot>
        </div>
        <h1 class="h-header-title">
            <slot>{{title}}</slot>
        </h1>
        <div class="h-header-btn is-right">
            <slot name="right"></slot>
        </div>
    </header>
</template>

<script>
export default {
  name: "h-header",
  props: {
    title: {
      type: String,
      default: "头部标题"
    },
    fixed: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="scss">
@import "../scss/var";
@import "../scss/mixin";
.h-header {
  display: flex;
  align-items: center;
  width: 100%;
  height: $header-height;
  background: $color-blue;
  color: $color-white;
  white-space: nowrap;
  .h-header-title {
    flex: 1;
    text-align: center;
    line-height: $header-height;
    @include ellipsis;
  }
  .h-header-btn {
    flex: 0.5;
    display: flex;
    align-items: center;
    height: 100%;
    color: inherit;
    a {
      color: inherit;
    }
  }
  .is-left {
    padding-left: 0.2rem;
  }
  .is-right {
    justify-content: flex-end;
    padding-right: 0.2rem;
  }
  //header下面的button样式调整
  .h-btn{
    padding: 0;
    background: transparent;
    color: inherit;
    font-size: inherit;
    box-shadow: none;
  }
}
.h-header.is-fixed {
  position: fixed;
  top: 0;
  z-index: $header-footer-index;
}
</style>
