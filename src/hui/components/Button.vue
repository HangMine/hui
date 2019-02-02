<template>
    <button 
        class="h-btn" 
        :class="btnClass" 
        :disabled="disabled"
    >
      <i v-if="icon" class="h-iconfont" :class="icon"></i>
      <span class="h-btn-text"><slot></slot></span>
    </button>
</template>

<script>
export default {
  name: "h-button",
  props: {
    type: {
      type: String,
      default: "default"
    },
    size: {
      type: String,
      default: "normal"
    },
    plain: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
    },
    isLink: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    btnClass() {
      return [
        this.type ? `h-btn-${this.type}` : "",
        this.size ? `h-btn-${this.size}` : "",
        { "is-plain": this.plain },
        { "is-disabled": this.disabled },
        { "is-link": this.isLink }
      ];
    }
  }
};
</script>

<style lang="scss">
@import "../scss/var";
@import "../scss/mixin";
.h-btn {
  position: relative;
  border-radius: 0.08rem;
  padding: .2rem;

  //reset button style
  outline: 0;
  border: none;
  background: transparent;
  &.is-link::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    border-radius: inherit;
    opacity: 0;
  }
  &:not(.is-disabled):active::after {
    opacity: 0.3;
  }
  .iconfont {
    font-size: 1em;
  }
}
//type
.h-btn-default {
  background: $btn-default-bg-color;
  color: $btn-default-color;
  box-shadow: $btn-default-box-shadow;
}

.h-btn-primary {
  background: $btn-primary-bg-color;
  color: $btn-primary-color;
  box-shadow: $btn-default-box-shadow;
}

.h-btn-danger {
  background: $btn-danger-bg-color;
  color: $btn-danger-color;
  box-shadow: $btn-default-box-shadow;
}

//size
.h-btn-small {
  font-size: 0.28rem;
}
.h-btn-normal {
  font-size: 0.36rem;
}
.h-btn-large {
  width: 100%;
  font-size: 0.36rem;
}
//plain
.h-btn.is-plain {
  background: transparent;
  border-width: 2px;
  border-style: solid;
}
.h-btn-default.is-plain {
  border-color: $btn-default-plain-color;
  color: $btn-default-plain-color;
}
.h-btn-primary.is-plain {
  border-color: $btn-primary-bg-color;
  color: $btn-primary-bg-color;
}
.h-btn-danger.is-plain {
  border-color: $btn-danger-bg-color;
  color: $btn-danger-bg-color;
}
//disabled
.h-btn.is-disabled {
  opacity: 0.6;
}
</style>
