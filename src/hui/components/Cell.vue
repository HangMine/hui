<template>
  <a class="h-cell" :href="href">
    <div class="h-cell-left" v-if="$slots.left">
      <slot name="left"></slot>
    </div>
    <div class="h-cell-wrap">
      <div v-if="title" class="h-cell-title-wrap">
        <div class="h-cell-title">
          <i v-if="icon" class="h-iconfont h-cell-title-icon" :class="icon"></i>
          <slot name="title">{{title}}</slot>
        </div>
        <div v-if="label" class="h-ceil-label">{{label}}</div>
      </div>
      <div class="h-cell-value">
        <slot>{{value}}</slot>
        <i v-if="isLink" class="h-iconfont icon-xiangyou1 h-cell-link-icon"></i>
      </div>
    </div>
    <div class="h-cell-right" v-if="$slots.right">
      <slot name="right"></slot>
    </div>
    <div class="h-cell-mask" v-if="isLink"></div>
  </a>
</template>

<script>
export default {
  name: "h-cell",
  props: {
    to: String,
    title: [String, Number],
    value: String,
    icon: String,
    label: String,
    isLink: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      added: false
    };
  },
  computed: {
    href() {
      if (this.to && !this.added && this.$router) {
        //added防止重复绑定
        this.added = true;
        this.$nextTick(() => {
          this.$el.addEventListener("click", this.clickCell);
        });
      }
      return this.to;
    }
  },
  methods: {
    clickCell(e) {
      e.preventDefault();
      this.$router.push(this.to);
    }
  }
};
</script>

<style lang="scss">
@import "../scss/var";
@import "../scss/mixin";
.h-cell {
  position: relative;
  display: block;
  width: 100%;
  min-height: 0.96rem;
  background-color: #fff;
  color: inherit;
  font-size: inherit;
  .h-cell-wrap {
    display: flex;
    align-items: center;
    min-height: inherit;
    margin: 0 0.2rem;
    border-bottom: 1px solid $border-color;
    .h-cell-title-wrap {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .h-cell-title {
        display: flex;
        align-items: center;
        .h-cell-title-icon {
          font-size: 1em;
        }
      }
      .h-ceil-label {
        margin-top: 0.05rem;
        color: $cell-value-color;
        font-size: 0.9em;
      }
    }

    .h-cell-value {
      display: flex;
      align-items: center;
      color: $cell-value-color;
      .h-cell-link-icon {
        font-size: 1em;
        color: $cell-link-icon-color;
      }
    }
  }

  .h-cell-left {
    position: absolute;
    min-height: inherit;
    top: 0;
    left: 0;
    transform: translate3d(-100%, 0, 0);
  }
  .h-cell-right {
    position: absolute;
    min-height: inherit;
    top: 0;
    right: 0;
    transform: translate3d(100%, 0, 0);
  }
  .h-cell-mask {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0;
  }
  &:active .h-cell-mask {
    opacity: 0.1;
  }
  &:nth-of-type(1) {
    border-top: 1px solid $border-color;
  }
  &:nth-last-of-type(1) {
    border-bottom: 1px solid $border-color;
    .h-cell-wrap {
      border-bottom: none;
    }
  }
}
</style>
