<template>
  <div class="h-picker-wrap">
    <div class="h-picker" :style="{height:`${pickerHeight}px`}">
      <h-picker-item v-for="(slot,i) of slots" :key="i" v-bind="slot" @change="change"></h-picker-item>
    </div>
    <div class="h-picker-choose" :style="{height:`${lineHeight}px`}"></div>
  </div>
</template>

<script>
import PickerItem from "./PickerItem.vue";
export default {
  name: "h-picker",
  components: {
    PickerItem
  },
  props: {
    slots: Array,
    disLine: {
      type: Number,
      default: 5
    },
    lineHeight: {
      type: Number,
      default: 72
    }
  },
  data() {
    return {
      // lineHeight: 0,
      pickerHeight: 0,
      //如果disLine为偶数，直接+1
      resDisLine: this.disLine % 2 ? this.disLine : this.disLine + 1
    };
  },
  computed: {
    chooseValues() {
      let chooseValues = [];
      this.$children.forEach(child => {
        if (!child.divider) chooseValues.push(child.chooseValue);
      });
      return chooseValues;
    }
  },
  mounted() {
    this.setPickerHeight();
  },
  methods: {
    setPickerHeight() {
      this.pickerHeight = this.lineHeight * this.resDisLine;
    },
    setSlotValue(slotIndex, value) {
      let slots = this.$children.filter(child => !child.divider);
      let slot = slots[slotIndex];
      let index = slot.values.indexOf(value);
      slot.index = ~index ? index : 0;
      slot.swipe();
    },
    change() {
      this.$emit("change", this, this.chooseValues);
    }
  }
};
</script>

<style lang="scss">
@import "../scss/var";
@import "../scss/mixin";
.h-picker-wrap {
  position: relative;
  @include flex-center;

  .h-picker {
    width: 100%;
    overflow: hidden;
    display: flex;
    background: $color-white;
    font-size: 0.36rem;
  }
  .h-picker-choose {
    @include position-center;
    pointer-events: none;
    width: 100%;
    border-top: 1px solid $border-color;
    border-bottom: 1px solid $border-color;
  }
}
</style>
