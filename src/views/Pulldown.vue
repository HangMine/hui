<template>
    <div class="demo-page">
        <demo-header></demo-header>
        <h-loadmore :topFn="topFn" ref="loadmore" bottomHide class="demo-pulldown">
            <h-cell v-for="n of 15" :key="n" :title="n"></h-cell>
        </h-loadmore>
    </div>
</template>

<script>
export default {
    methods:{
        topFn(){
            setTimeout(() => {
                console.log('下拉数据加载成功！');
                this.$refs.loadmore.dropback();
            }, 2000);
        }
    }
}
</script>

<style lang="scss">
</style>
