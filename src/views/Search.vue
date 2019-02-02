<template>
    <div class="demo-page">
        <demo-header></demo-header>
        <h-search v-model="searchValue"></h-search>
    </div>
</template>

<script>
export default {
    data(){
        return{
            searchValue:''
        }
    }
};
</script>

<style lang="scss">

</style>
