<template>
  <div class="h-search">
    <div class="h-search-input-part">
      <div class="h-search-input-wrap">
        <i class="h-iconfont icon-search h-search-icon" :class="{'slide-left':slideLeft}"></i>
        <h-input
          v-model="searchStr"
          class="h-search-input"
          :class="{'slide-left':slideLeft}"
          :placeholder="placeholder"
          @focus.native="focus"
          @blur.native="blur"
          ref="input"
        ></h-input>
        <i
          class="h-iconfont icon-delete_fill h-search-delicon"
          v-show="slideLeft"
          @click.prevent="del"
        ></i>
      </div>

      <a class="h-search-btn" v-show="slideLeft">{{cancelText}}</a>
    </div>

    <div class="h-search-list">
      <h-cell v-for="(item,index) of result" :key="index" :title="item"></h-cell>
      <h-cell title="查询不到记录" v-show="slideLeft && result.length==0"></h-cell>
    </div>
  </div>
</template>

<script>
export default {
  name: "h-search",
  props: {
    value: String,
    result: {
      type: Array,
      default: function() {
        return [];
      }
    },
    cancelText: {
      type: String,
      default: "取消"
    },
    placeholder: {
      type: String,
      default: "搜索"
    },
    autoFocus: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      searchStr: this.value,
      slideLeft: false
    };
  },
  watch: {
    value: function() {
      this.searchStr = this.value;
    },
    searchStr: function() {
      this.$emit("input", this.searchStr);
    }
  },
  mounted() {
    if (this.autoFocus) this.focusInput();
  },
  methods: {
    del() {
      this.clear();
      this.focusInput();
    },
    focus() {
      this.slideLeft = true;
    },
    blur() {
      this.reset();
    },
    clear() {
      this.searchStr = "";
    },
    focusInput() {
      this.$refs.input.$el.focus();
    },
    reset() {
      this.slideLeft = false;
      this.clear();
    }
  }
};
</script>

<style lang="scss">
@import "../scss/var";
@import "../scss/mixin";
.h-search-input-part {
  display: flex;
  align-items: center;
  padding: 0.2rem;
  background: $search-bg-color;
  .h-search-input-wrap {
    flex: 1;
    position: relative;
    display: flex;
    align-items: center;

    .h-search-icon {
      position: absolute;
      left: 3.1rem;
      font-size: 0.35rem;
      color: $color-gray;
      transition: left 0.2s;
    }
    .h-search-icon.slide-left {
      left: 0.2rem;
    }
    .h-search-input {
      padding-left: 3.5rem;
      transition: padding 0.2s;
      @include caretColor($color-blue, $cell-value-color);
    }
    .h-search-input.slide-left {
      padding-left: 0.6rem;
    }
    .h-search-delicon {
      position: absolute;
      right: 0.2rem;
      font-size: 0.35rem;
      color: $color-gray;
    }
  }
  .h-search-btn {
    flex-shrink: 0;
    color: $color-blue;
    margin-left: 0.2rem;
  }
}
</style>
