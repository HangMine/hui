<template>
    <div class="demo-page">
        <demo-header></demo-header>
        <h-cell title="只有标题"></h-cell>
        <h-cell title="只有标题" label="描述"></h-cell>
        <h-cell value="只有值"></h-cell>
        <h-cell title="标题" value="值"></h-cell>
        <h-cell title="标题带图标"  icon="icon-search"></h-cell>
        <h-cell title="标题带图标"  icon="icon-search" value="再加上值"></h-cell>
        <h-cell title="如果是可点击" label="跳转到XXX.com"  icon="icon-search" is-link></h-cell>
        <h-cell>
            <h-button slot="title">自定义html</h-button>
            <h-button type="primary">whatever you want</h-button>
        </h-cell>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">

</style>
