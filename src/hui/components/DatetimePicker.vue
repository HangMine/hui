<template>
  <h-popup v-model="show" position="bottom" class="h-datetime-picker-popup">
    <div class="h-datetime-picker">
      <div class="h-datetime-picker-header">
        <a class="h-datetime-picker-btn h-datetime-picker-btn-cancel" @click="cancel">取消</a>
        <a class="h-datetime-picker-btn h-datetime-picker-btn-commit" @click="commit">确定</a>
      </div>
      <h-picker v-if="slots.length>0" :slots="slots" ref="picker" @change="change"></h-picker>
    </div>
  </h-popup>
</template>

<script>
export default {
  name: "h-datetime-picker",
  props: {
    type: {
      type: String,
      default: "datetime"
    },
    value: {
      type: Boolean,
      default: false
    },
    defaultValues: Array
  },
  data() {
    return {
      show: this.value,
      //values统一为字符串
      yearValues: [...Array(21)].map(
        (item, i) => `${i - 10 + new Date().getFullYear()}`
      ),
      monthValues: [...Array(12)].map((item, i) => `0${i + 1}`.slice(-2)),
      dayValues: [],
      hourValues: (this.hourValues = [...Array(24)].map((item, i) =>
        `0${i}`.slice(-2)
      )),
      minuteValues: (this.minuteValues = [...Array(60)].map((item, i) =>
        `0${i}`.slice(-2)
      )),
      slots: []
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
  mounted() {
    this.init();
  },
  methods: {
    init(year, month) {
      switch (this.type) {
        case "datetime":
          this.setDayValues(year, month);
          this.setDatetimeSlots();
          break;
        case "date":
          this.setDayValues(year, month);
          this.setDateSlots();
          break;
        case "time":
          this.setTimeSlots();
          break;
        default:
          break;
      }
      this.setDefalutValues();
    },
    setDefalutValues() {
      if (this.defaultValues) {
        //此处用nextTick保证this.$refs.picker的获取
        this.$nextTick(() => {
          this.defaultValues.forEach((value, i) => {
            this.$refs.picker.setSlotValue(i, value);
          });
        });
      }
    },
    setDayValues(year, month) {
      let isLeapYear = this.isLeapYear(year);

      let day = 31;
      if ([4, 6, 9, 11].indexOf(+month) != -1) day = 30;
      if (+month == 2) day = isLeapYear ? 29 : 28;

      this.dayValues = [...Array(day)].map((item, i) => `0${i + 1}`.slice(-2));
    },
    isLeapYear(year) {
      year = +year;
      if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) return true;
    },
    setDatetimeSlots() {
      this.setDateSlots();
      this.setTimeSlots();
    },
    setDateSlots() {
      this.slots.push({ values: this.yearValues });
      this.slots.push({ values: this.monthValues });
      this.slots.push({ values: this.dayValues });
    },
    setTimeSlots() {
      this.slots.push({ values: this.hourValues });
      this.slots.push({ divider: true, content: ":" });
      this.slots.push({ values: this.minuteValues });
    },
    changeDaySlots() {
      if (this.type != "time") this.slots[2].values = this.dayValues;
    },
    change(picker, chooseValues) {
      let year = chooseValues[0];
      let month = chooseValues[1];
      this.setDayValues(year, month);
      this.changeDaySlots();
    },
    cancel() {
      this.show = false;
    },
    commit() {
      let chooseValues = this.$refs.picker.chooseValues;
      let time = null;
      switch (this.type) {
        case "datetime":
          time = new Date(
            `${chooseValues[0]}/${chooseValues[1]}/${chooseValues[2]} ${
              chooseValues[3]
            }:${chooseValues[4]}`
          );
          break;
        case "date":
          time = new Date(
            `${chooseValues[0]}/${chooseValues[1]}/${chooseValues[2]}`
          );
          break;
        case "time":
          time = `${chooseValues[0]}:${chooseValues[1]}`;
          break;

        default:
          break;
      }
      this.$emit("commit", time);
    }
  }
};
</script>

<style lang="scss">
@import "../scss/var";
.h-datetime-picker-popup {
  width: 100%;
  .h-datetime-picker {
    .h-datetime-picker-header {
      display: flex;
      background: $color-white;
      border-bottom: 1px solid $border-color;
      .h-datetime-picker-btn {
        flex: 1;
        color: $color-blue;
        text-align: center;
        padding: 0.2rem;
        font-size: 0.32rem;
      }
    }
  }
}
</style>
