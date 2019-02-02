<template>
    <div class="not-found">
        访问了一个路由之外的地址~
    </div>
</template>

<script>
export default {
  name: "not-found-component"
};
</script>

<style lang="scss">
@import "~@/assets/mixin";
.not-found {
  @include position-center;
}
</style>
