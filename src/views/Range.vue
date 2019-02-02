<template>
    <div class="demo-page">
        <demo-header></demo-header>
        <div class="demo-range">
            <h4 class="demo-title">自定义左右文字</h4>
            <h-range v-model="range">
                <span slot="left">{{range}}%</span>
                <span slot="right">100%</span>
            </h-range>
            <h-range v-model="range">
                <span slot="left">0%</span>
                <span slot="right">{{range}}%</span>
            </h-range>
            <h-range v-model="range">
            </h-range>
            <h4 class="demo-title">自定义高度</h4>
            <h-range v-model="range" :height="0.1">
                <span slot="left">{{range}}%</span>
                <span slot="right">100%</span>
            </h-range>
            <h-range v-model="range" :height="0.02">
                <span slot="left">{{range}}%</span>
                <span slot="right">100%</span>
            </h-range>
            <h4 class="demo-title">自定义区间和step</h4>
            <h-range v-model="rangeStep" :height="0.1" :min="12" :max="28" :step="2">
                <span slot="left">{{rangeStep}}</span>
                <span slot="right">28</span>
            </h-range>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      range: 0,
      rangeStep: 12
    };
  }
};
</script>

<style lang="scss">
.demo-range{
    padding: 1.1rem .2rem .2rem .2rem;
}
</style>
