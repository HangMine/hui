<template>
    <div class="demo-page">
        <demo-header></demo-header>
        <div class="demo-switch">
            <h-switch v-model="switch1" class="demo-switch-item">{{switch1}}</h-switch>
            <h-switch v-model="switch2" class="demo-switch-item">{{switch2}}</h-switch>
            <h-cell :title="`选项 ${switch3}`">
                <h-switch v-model="switch3" class="demo-switch-item"></h-switch>
            </h-cell>
            <h-cell :title="`选项 ${switch4}`">
                <h-switch v-model="switch4" class="demo-switch-item"></h-switch>
            </h-cell>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            switch1: false,
            switch2: true,
            switch3: false,
            switch4: true,
        }
    }
}
</script>

<style lang="scss">
.demo-switch{
    .demo-switch-item{
        padding: .2rem;
    }
}
</style>
