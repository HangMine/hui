<template>
    <h-header class="header-demo" v-show="$route.path!=='/'">
      <h-button icon="icon-fanhui" slot="left" @click.native="back"></h-button>
      {{$route.path.slice(1).replace('/','')}}
    </h-header>
</template>

<script>
export default {
    methods: {
    back() {
      this.$router.push("/");
    }
  }
}
</script>

<style lang="scss">
// @import "~@/assets/mixin";
// .header-btn{
//   @include flex-center;
// }
</style>
