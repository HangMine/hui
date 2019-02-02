<template>
    <input class="h-input" v-model="currentValue">
</template>

<script>
export default {
  name: "h-input",
  props: {
    value: String
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
@import "../../scss/var";
.h-input {
  border: 1px solid $border-color;
  border-radius: 0.05rem;
  padding: 0.15rem 0.15rem;
  width: 100%;
  appearance: none;
  outline: none;
  transition: border 0.3s;
  color: $input-text-color;
  &:focus {
    border-color: $input-focus-border-color;
  }
}
</style>
