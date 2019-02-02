<template>
    <a 
    class="h-tab-item" 
    :class="{'is-active':$parent.value==id}"
    @click="$parent.$emit('input',id)"
    >
        <div class="h-tab-icon">
            <slot name="icon"></slot>
        </div>
        <p class="h-tab-text">
            <slot></slot>
        </p>
    </a>
</template>

<script>
export default {
  name: "h-tab-item",
  props: {
    id: [String, Number]
  }
};
</script>

<style lang="scss">
@import "../scss/var";
@import "../scss/mixin";
.h-tab-item {
  flex: 1;
  padding: 0.1rem 0;
  @include flex-column-center;
  transition: all .3s;
  .h-tab-icon{
    padding-bottom: .1rem;
  }
}

</style>
