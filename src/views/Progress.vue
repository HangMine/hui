<template>
    <div class="demo-page">
        <demo-header></demo-header>
        <div class="demo-progress">
            <h4 class="demo-title">自定义左右文字</h4>
            <h-progress v-model="progress">
                <span slot="left">{{progress}}%</span>
                <span slot="right">100%</span>
            </h-progress>
            <h-progress v-model="progress">
                <span slot="left">50%</span>
            </h-progress>
            <h-progress v-model="progress">
                <span slot="right">50%</span>
            </h-progress>
            <h-progress v-model="progress">
            </h-progress>
            <h4 class="demo-title">自定义高度</h4>
            <h-progress v-model="progress" :height="0.1">
                <span slot="left">{{progress}}%</span>
                <span slot="right">100%</span>
            </h-progress>
            <h-progress v-model="progress" :height="0.02">
                <span slot="left">{{progress}}%</span>
                <span slot="right">100%</span>
            </h-progress>
            <h4 class="demo-title">自定义区间</h4>
            <h-progress v-model="progressStep" :height="0.1" :min="12" :max="28">
                <span slot="left">{{progressStep}}</span>
                <span slot="right">28</span>
            </h-progress>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            progress:50,
            progressStep: 12
        }
    }
}
</script>

<style lang="scss">
.demo-progress{
    padding: 1.1rem .2rem .2rem .2rem;
}
</style>
