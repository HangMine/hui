<template>
  <div class="demo-page">
    <demo-header></demo-header>
    <div class="demo-palette-button">
      <h-palette-button class="demo-palette-button-1">
        <h-palette-button-item v-for="n of 4" :key="n">{{n}}</h-palette-button-item>
      </h-palette-button>
      <h-palette-button class="demo-palette-button-2" direction="t">
        <h-palette-button-item v-for="n of 4" :key="n">{{n}}</h-palette-button-item>
      </h-palette-button>
      <h-palette-button class="demo-palette-button-3" direction="rt">
        <h-palette-button-item v-for="n of 4" :key="n">{{n}}</h-palette-button-item>
      </h-palette-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.demo-palette-button {
  height: calc(100vh - 1.1rem);
  .demo-palette-button-1 {
    position: absolute;
    bottom: 0.3rem;
    right: 0.3rem;
  }
  .demo-palette-button-2 {
    position: absolute;
    bottom: 0.3rem;
    left: 3.3rem;
  }
  .demo-palette-button-3 {
    position: absolute;
    bottom: 0.3rem;
    left: 0.3rem;
  }
}
</style>
