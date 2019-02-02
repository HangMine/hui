<template>

<label class="h-switch">
    <input 
        type="checkbox" 
        class="h-switch-input"
        v-model="currentValue"
        :disabled="disabled"
    >
    <span class="h-switch-core"></span>
    <div class="h-switch-label"><slot></slot></div>
</label>

</template>

<script>
export default {
  name: "h-switch",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    disabled: String
  },
  data() {
    return {
      currentValue: this.value
    };
  },
  watch: {
    value: function() {
      this.currentValue = this.value;
    },
    currentValue: function() {
      this.$emit("input", this.currentValue);
    }
  }
};
</script>

<style lang="scss">
@import "../scss/var";
.h-switch {
  display: flex;
  align-items: center;

  //core在最底层。为灰色背影,切换时变成蓝色
  .h-switch-core {
    position: relative;
    display: inline-block;
    width: 1.04rem;
    height: 0.64rem;
    background: $color-gray;
    border: 1px solid #d9d9d9;
    border-radius: 0.64rem;
    transition: all 0.3s;
    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 0;
      transition: transform 0.3s;
    }
    //before元素在core下面，所以在最二层，为浅灰色背影，切换时scale效果
    &::before {
      width: 1.02rem;
      height: 0.62rem;
      background: #fdfdfd;
      border-radius: 0.64rem;
    }
    //after元素在最后，所以在最上层，为圆球
    &::after {
      width: 0.6rem;
      height: 0.58rem;
      top: 0.02rem;
      background: white;
      box-shadow: 0 0.02rem 0.06rem rgba(0, 0, 0, 0.4);
      border-radius: 0.6rem;
    }
  }
  .h-switch-label {
    margin-left: .2rem;
    display: inline-block;

    &:empty {
      margin-left: 0;
    }
  }
  .h-switch-input {
    display: none;
    //选中时效果
    &:checked {
      //灰色背影切换时变成蓝色
      + .h-switch-core {
        border-color: $color-blue;
        background-color: $color-blue;
        //圆球向右移动
        &::after {
          transform: translate3d(0.41rem, 0, 0);
        }
        //浅灰色背影scale效果
        &::before {
          transform: scale(0);
        }
      }
    }
    //禁用时效果
    &[disabled]{
      + .h-switch-core {
        border-color: $switch-disabled-color;
        background-color: $switch-disabled-color;
      }
    }
  }
}
</style>
