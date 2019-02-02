<template>
    <div class="demo-page">
      <demo-header></demo-header>
      <h-nav-bar v-model="active">
        <h-tab-item id="a">
          导航1
        </h-tab-item>
        <h-tab-item  id="b">
          导航2
        </h-tab-item>
        <h-tab-item id="c">
          导航3
        </h-tab-item>
        <h-tab-item id="d">
          导航4
        </h-tab-item>
      </h-nav-bar>

      <h-tab-container v-model="active">
        <h-tab-container-item id="a">
          <h-cell v-for="item of 5" :key="item" :title="item"></h-cell>
        </h-tab-container-item>
        <h-tab-container-item id="b">
          <h-cell v-for="item of 6" :key="item" :title="item"></h-cell>
        </h-tab-container-item>
        <h-tab-container-item id="c">
          <h-cell v-for="item of 7" :key="item" :title="item"></h-cell>
        </h-tab-container-item>
        <h-tab-container-item id="d">
          <h-cell v-for="item of 8" :key="item" :title="item"></h-cell>
        </h-tab-container-item>
      </h-tab-container>

      <h-tab-bar v-model="active">
        <h-tab-item id="a">
          <i class="iconfont icon-buju_toubu demo-footer-icon" slot="icon"></i>
          底部1
        </h-tab-item>
        <h-tab-item  id="b">
        <i class="iconfont icon-buju_toubu demo-footer-icon" slot="icon"></i>
          底部2
        </h-tab-item>
        <h-tab-item id="c">
          <i class="iconfont icon-buju_toubu demo-footer-icon" slot="icon"></i>
          底部3
        </h-tab-item>
        <h-tab-item id="d">
          <i class="iconfont icon-buju_toubu demo-footer-icon" slot="icon"></i>
          底部4
        </h-tab-item>
      </h-tab-bar>
    </div>
</template>

<script>
export default {
  data() {
    return {
      active: "a"
    };
  }
};
</script>

<style lang="scss">
.demo-footer-icon{
  font-size: .4rem;
}
</style>
