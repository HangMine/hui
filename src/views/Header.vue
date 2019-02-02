<template>
  <div class="demo-page">
    <demo-header></demo-header>
    <h4 class="demo-title">只含标题</h4>
    <h-header :fixed="false"></h-header>
    <h4 class="demo-title">左侧文字</h4>
    <h-header :fixed="false">
      <p slot="left">返回</p>
    </h-header>
    <h4 class="demo-title">左侧按钮</h4>
    <h-header :fixed="false">
      <h-button icon="icon-fanhui" slot="left">返回</h-button>
    </h-header>
    <h4 class="demo-title">右侧按钮</h4>
    <h-header :fixed="false">
      <h-button icon="icon-fanhui" slot="left">返回</h-button>
      <i class="h-iconfont icon-gengduo" slot="right"></i>
    </h-header>
  </div>
    
</template>

<script>
export default {

}
</script>

<style lang="scss">

</style>
