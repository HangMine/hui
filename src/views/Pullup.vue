<template>
    <div class="demo-page">
        <demo-header></demo-header>
        <h-loadmore :botFn="botFn" ref="loadmore" topHide>
            <h-cell v-for="n of 15" :key="n" :title="n"></h-cell>
        </h-loadmore>
    </div>
</template>

<script>
export default {
    methods:{
        botFn(){
            setTimeout(() => {
                console.log('上拉数据加载成功！');
                this.$refs.loadmore.dropback();
            }, 2000);
        }
    }
}
</script>

<style lang="scss">

</style>
