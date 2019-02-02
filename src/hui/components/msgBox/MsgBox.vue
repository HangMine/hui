<template>
    <h-popup v-model="show" class="h-msg-box" :closeOnClickShade="closeOnClickShade">
        <h4 class="h-msg-box-title">
          {{title}}
        </h4>
        <div class="h-msg-box-msg">
          <h-input v-if="type=='prompt'" type="text" v-model="inputVal"></h-input>
          <p v-else>{{msg}}</p>
        </div>
        <div class="h-msg-box-bottom">
          <a 
            class="h-msg-box-button h-msg-box-cancel" 
            v-if="showCancelButton"
            @click="cancel"
          >取消</a>
          <a 
            class="h-msg-box-button h-msg-box-commit" 
            v-if="showCommitButton"
            @click="commit"
          >确定</a>
        </div>
    </h-popup>
</template>

<script>
import Popup from "../Popup.vue";
import { once } from "../../js/dom.js";
export default {
  name: "h-msg-box",
  components: {
    Popup
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "alert"
    },
    closeOnClickShade: {
      type: Boolean,
      default: true
    },
    showCancelButton: {
      type: Boolean,
      default: true
    },
    showCommitButton: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: "提示"
    },
    msg: {
      type: String,
      default: "请传入需要显示的内容"
    }
  },
  data() {
    return {
      show: this.value,
      inputVal: ""
    };
  },
  watch: {
    value: function() {
      this.show = this.value;
    },
    show: function() {
      this.$emit("input", this.show);
      //关闭时删除dom元素
      this.remove();
    }
  },
  methods: {
    cancel() {
      this.show = false;
      //reject由MsgBox.js设置
      let payload =
        this.type == "prompt"
          ? { value: this.inputVal, type: this.type }
          : this.type;
      this.reject(payload);
    },
    commit() {
      this.show = false;
      //resolve由MsgBox.js设置
      let payload =
        this.type == "prompt"
          ? { value: this.inputVal, type: this.type }
          : this.type;
      this.resolve(payload);
    },
    remove() {
      if (this.show == false) {
        once(this.$el, "transitionend", () => {
          if (this.$el.parentNode) this.$el.parentNode.removeChild(this.$el);
        });
      }
    }
  }
};
</script>

<style lang="scss">
@import "../../scss/var";
.h-msg-box {
  width: 80%;
  background: $msg-box-bg-color;
  text-align: center;
  font-size: 0.32rem;
  border-radius: 0.06rem;
  .h-msg-box-title {
    padding: 0.2rem;
    font-size: 0.32rem;
  }
  .h-msg-box-msg {
    padding: 0 0.4rem 0.4rem 0.4rem;
    color: $msg-box-msg-text-color;
  }
  .h-msg-box-bottom {
    display: flex;
    border-top: 1px solid $color-gray;
    .h-msg-box-button {
      flex: 1;
      line-height: 0.8rem;
      &:active {
        background: $msg-box-active-bg-color;
      }
    }
    .h-msg-box-cancel {
      border-right: 1px solid $color-gray;
    }
    .h-msg-box-commit {
      color: $msg-box-bottom-text-color;
    }
  }
}
</style>
