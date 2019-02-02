<template>
    <div class="h-checklist" :class="{'is-limit': max <= currentValue.length}">
        <h3 class="h-checklist-title">{{title}}</h3>
        <h-cell v-for="(item,index) of options" :key="index" >
            <label class="h-checklist-item" slot="title">
                <span 
                    class="h-checklist-checkbox"
                    :class="{'is-right':align==='right'}"
                >
                    <input
                        type="checkbox"
                        class="h-checklist-input"
                        :value="item.value"
                        v-model="currentValue"
                        :disabled="item.disabled"
                    >
                    <span class="h-checklist-core"></span>
                </span>
                
                <span class="h-checklist-label">{{item.label}}</span>
            </label>
        </h-cell>
    </div>
</template>

<script>
import HCell from "./Cell.vue";
export default {
  name: "h-checklist",
  components: {
    HCell
  },
  props: {
    title: String,
    options: Array,
    value: Array,
    align: {
      type: String,
      validator: function(value) {
        return ["left", "right"].indexOf(value) !== -1;
      }
    },
    max: [Number, String]
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
      if (+this.max < val.length) val.pop();
      this.$emit("input", val);
    }
  }
};
</script>

<style lang="scss">
@import "../scss/var";
.h-checklist {
  &.is-limit {
    .h-checklist-input:not(:checked) {
      + .h-checklist-core {
        background: $disabled-color;
        border-color: $disabled-color;
      }
    }
  }
  .h-checklist-title {
    padding: 0.05rem 0.2rem;
    font-weight: bold;
    color: $checklist-title-color;
    font-size: 0.24rem;
  }
  .h-checklist-item {
    display: inline-block;
    width: 100%;
    padding: 0.2rem;
    .h-checklist-checkbox {
      display: inline-block;
      vertical-align: middle;
      &.is-right {
        float: right;
        + .h-checklist-label {
          margin-left: 0;
        }
      }
      .h-checklist-core {
        display: inline-block;
        position: relative;
        width: 0.4rem;
        height: 0.4rem;
        background: $color-white;
        border: 0.02rem solid $checklist-border-color;
        border-radius: 50%;
        //防止当勾选数超过Max数时的闪烁效果
        transition: all 0.1s;
        &::before {
          content: "";
          position: absolute;
          top: 0.1rem;
          left: 0.09rem;
          width: 0.16rem;
          height: 0.08rem;
          border-left: 0.04rem solid $color-white;
          border-bottom: 0.04rem solid $color-white;
          transform: scale(0) rotate(-45deg);
          transition: transform 0.3s;
        }
      }
      .h-checklist-input {
        display: none;
        &:checked {
          + .h-checklist-core {
            background: $color-blue;
            border-color: $color-blue;
            &::before {
              transform: scale(1) rotate(-45deg);
            }
          }
        }
        &[disabled] {
          + .h-checklist-core {
            background: $disabled-color;
            border-color: $disabled-color;
          }
        }
      }
    }

    .h-checklist-label {
      margin-left: 0.2rem;
      font-size: 0.32rem;
      &:empty {
        margin-left: 0;
      }
    }
  }
}
</style>
