<template>
    <h-cell :title="title" class="h-field-wrap">
        <div class="h-field" :class="{'is-textarea':type==='textarea'}">
            <textarea 
                v-if="type==='textarea'"
                class="h-field-textarea"
                :rows="rows"
                v-model="currentValue"
                :placeholder="placeholder"
                :readonly="readonly"
                @focus="active=true"
                @blur="active=false"
            ></textarea>
            <input
                v-else 
                v-bind="$attrs"
                :type="type"
                class="h-field-input"
                v-model="currentValue"
                :placeholder="placeholder"
                :readonly="readonly"
                @focus="active=true"
                @blur="active=false"
                ref="input"
            >
            
            <span class="h-field-iconlist">
                <i
                    v-if="!disableClear && !readonly"
                    v-show="currentValue && active" 
                    class="h-iconfont icon-delete_fill h-field-icon"
                    @click="clear"
                ></i>
                <i v-show="state=='success'" class="h-iconfont icon-success_fill h-field-icon h-field-icon-success"></i>
                <i v-show="state=='error'" class="h-iconfont icon-delete_fill h-field-icon h-field-icon-error"></i>
                <i v-show="state=='warning'" class="h-iconfont icon-prompt_fill h-field-icon h-field-icon-warning"></i>
                <span class="h-field-icon h-field-user-icon">
                    <slot></slot>
                </span>
            </span>
        </div>
        
    </h-cell>
</template>

<script>
import HCell from "./Cell.vue";
export default {
  name: "h-field",
  inheritAttrs: false,
  components: {
    HCell
  },
  props: {
    type: {
      type: String,
      default: "text"
    },
    value: [String, Number],
    title: String,
    state: String,
    placeholder: {
      type: String,
      default: "请输入内容"
    },
    disableClear: Boolean,
    readonly: Boolean,
    rows: {
        type:[Number,String],
        default: 5
    }
  },
  data() {
    return {
      currentValue: this.value,
      active: false
    };
  },
  watch: {
    value: function() {
      this.currentValue = this.value;
    },
    currentValue: function() {
      this.$emit("input", this.currentValue);
    }
  },
  methods: {
    clear() {
      this.currentValue = "";
      this.$refs.input.focus();
    }
  }
};
</script>

<style lang="scss">
@import "../scss/var";
.h-field-wrap {
  //改变原先cell-title布局
  .h-cell-title-wrap {
    flex: none !important;
    width: 2.1rem;
  }
  //改变原先cell-value布局
  .h-cell-value {
    flex: 1;
  }

  .h-field {
    width: 100%;
    display: flex;
    align-items: center;
    &.is-textarea{
        padding: .2rem 0;
    }
    
    .h-field-input {
      flex: 1;
      border: none;
    }
    .h-field-textarea{
        flex: 1;
        line-height: 1.6;
    }
    .h-field-iconlist {
      .h-field-icon {
        font-size: 0.4rem;
        padding-left: 0.1rem;
        color: $color-gray;
      }
      .h-field-icon-success {
        color: $success-color;
      }
      .h-field-icon-error {
        color: $error-color;
      }
      .h-field-icon-warning {
        color: $warning-color;
      }
      .h-field-user-icon {
        display: inline-block;
      }
    }
  }
}
</style>
