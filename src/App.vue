<template>
  <div id="app">

      <transition :name="routerAnimate">
        <router-view></router-view> 
      </transition>   

  </div>
</template>

<script>

import { mapState } from "vuex";
export default {
  
  computed: {
    ...mapState(["routerAnimate"])
  }
};
</script>


<style lang="scss">
@import "~@/hui/scss/main";
@import "~@/hui/scss/var";
@import "~@/hui/scss/mixin";
.header-demo {
  background: transparent !important;
  color: black !important;
  font-size: 0.36rem;
  height: 1.1rem !important;
}
// .router-view {
//   padding-top: 1.1rem;
// }
</style>
