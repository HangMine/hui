<template>
  <div class="demo-page">
      <demo-header></demo-header>
      <ul v-infinite-scroll= "loadFn" :infinite-scroll-loading="loading" class="demo-infinite-scroll">
          <li v-for="n of list" :key="n">
              <h-cell :title="n"></h-cell>
          </li>
          <li class="spinner" v-show="loading">
              <spinner></spinner>
          </li>
          
      </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: 15,
      loading: false
    };
  },
  methods: {
    loadFn() {
      this.loading = true;
      setTimeout(() => {
        this.list += 5;
        this.loading = false;
      }, 1500);
    }
  }
};
</script>

<style lang="scss">
.spinner {
  display: flex;
  justify-content: center;
}
</style>
