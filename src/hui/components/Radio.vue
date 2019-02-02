<template>
    <div class="h-radio">
        <h3 class="h-radio-title">{{title}}</h3>
        <h-cell v-for="(item,index) of options" :key="index" >
            <label class="h-radio-item" slot="title">
                <span 
                    class="h-radio-wrap"
                    :class="{'is-right':align==='right'}"
                >
                    <input
                        type="radio"
                        class="h-radio-input"
                        :value="item.value"
                        v-model="currentValue"
                        :disabled="item.disabled"
                    >
                    <span class="h-radio-core"></span>
                </span>
                
                <span class="h-radio-label">{{item.label}}</span>
            </label>
        </h-cell>
    </div>
</template>

<script>
import HCell from "./Cell.vue";
export default {
  name: "h-radio",
  components: {
    HCell
  },
  props: {
    title: String,
    options: Array,
    value: [String, Number],
    align: {
      type: String,
      validator: function(value) {
        return ["left", "right"].indexOf(value) !== -1;
      }
    }
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
    currentValue: function(val) {
      this.$emit("input", val);
    }
  }
};
</script>

<style lang="scss">
@import "../scss/var";
.h-radio {
  .h-radio-title {
    padding: 0.05rem 0.2rem;
    font-weight: bold;
    color: $radio-title-color;
    font-size: 0.24rem;
  }
  .h-radio-item {
    display: inline-block;
    width: 100%;
    padding: 0.2rem;
    .h-radio-wrap {
      display: inline-block;
      vertical-align: middle;
      &.is-right {
        float: right;
        + .h-radio-label {
          margin-left: 0;
        }
      }
      .h-radio-core {
        display: inline-block;
        position: relative;
        width: 0.4rem;
        height: 0.4rem;
        background: $color-white;
        border: 0.02rem solid $radio-border-color;
        border-radius: 50%;
        //防止当勾选数超过Max数时的闪烁效果(和checkbox保持一致)
        transition: all 0.1s;
        &::before {
          content: "";
          position: absolute;
          top: 0.1rem;
          left: 0.1rem;
          width: 0.16rem;
          height: 0.16rem;
          background: $color-white;
          border-radius: 50%;
          transform: scale(0) rotate(-45deg);
          transition: transform 0.3s;
        }
      }
      .h-radio-input {
        display: none;
        &:checked {
          + .h-radio-core {
            background: $color-blue;
            border-color: $color-blue;
            &::before {
              transform: scale(1) rotate(-45deg);
            }
          }
        }
        &[disabled] {
          + .h-radio-core {
            background: $disabled-color;
            border-color: $disabled-color;
          }
        }
      }
    }

    .h-radio-label {
      margin-left: 0.2rem;
      font-size: 0.32rem;
      &:empty {
        margin-left: 0;
      }
    }
  }
}
</style>
