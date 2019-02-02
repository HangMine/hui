<template>
      <div class="demo-page">
        <demo-header></demo-header>
        <div class="demo-btn-wrap">
            <h-button class="demo-btn" size="large" @touchstart.native="load">普通load</h-button>
            <h-button class="demo-btn" size="large" @touchstart.native="loadDif">不同类型load</h-button>
            <h-button class="demo-btn" size="large" @touchstart.native="loadText">带文字load</h-button>
        </div>
     </div>
</template>

<script>
export default {
  methods: {
    load() {
      let load = this.$load();
      setTimeout(() => {
        load.close();
      }, 1500);
    },
    loadDif() {
      let load = this.$load({ type: 1 });
      setTimeout(() => {
        load.close();
      }, 1500);
    },
    loadText() {
      let load = this.$load("加载中...");
      setTimeout(() => {
        load.close();
      }, 1500);
    }
  }
};
</script>

<style lang="scss">
</style>
