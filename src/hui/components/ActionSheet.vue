<template>
    <h-popup v-model="show" position="bottom" class="h-action-sheet" :closeOnClickShade="closeOnClickShade">
        <ul>
            <li 
                v-for="(item,index) of action" 
                :key="index"
                class="h-action-sheet-item"
                @click="item.fn"
            >
                {{item.text}}
            </li>
        </ul>
        <a v-if="cancelText" class="h-action-sheet-btn" @click="cancel">{{cancelText}}</a>
    </h-popup>
</template>

<script>
import Popup from "./Popup.vue";
export default {
  name: "h-action-sheet",
  components: {
    Popup
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    action: {
      type: Array,
      default: function() {
        return [
          {
            text: "拍照",
            fn() {
              console.log("请传入fn回调");
            }
          },
          {
            text: "从拍照中选择",
            fn() {
              console.log("请传入fn回调");
            }
          }
        ];
      }
    },
    cancelText: {
      type: String,
      default: "取消"
    },
    closeOnClickShade: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      show: this.value
    };
  },
  watch: {
    value: function() {
      this.show = this.value;
    },
    show: function() {
      this.$emit("input", this.show);
    }
  },
  methods: {
    cancel() {
      this.show = false;
    }
  }
};
</script>

<style lang="scss">
@import "../scss/var";
.h-action-sheet {
  width: 100%;
  background: $action-sheet-bg-color;
  font-size: 0.32rem;
  color: $action-sheet-text-color;
  text-align: center;
  .h-action-sheet-item {
    padding: 0.2rem;
    background: $action-sheet-item-bg-color;
    border-bottom: 1px solid $action-sheet-bg-color;
    &:nth-last-of-type(1) {
      border-bottom: none;
    }
    &:active {
      background: $action-sheet-active-bg-color;
    }
  }
  .h-action-sheet-btn {
    display: block;
    padding: 0.2rem;
    margin-top: 0.1rem;
    background: $action-sheet-item-bg-color;
    &:active {
      background: $action-sheet-active-bg-color;
    }
  }
}
</style>
