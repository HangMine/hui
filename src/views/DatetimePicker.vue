<template>
  <div class="demo-page">
      <demo-header></demo-header>
      <div class="datetime-pikcer-demo demo-btn-wrap" >
          <h-button @click.native="popup" size="large" class="demo-btn">Datetime-pikcer</h-button>
          <h-button @click.native="popup2" size="large" class="demo-btn">Date-pikcer</h-button>
          <h-button @click.native="popup3" size="large" class="demo-btn">Time-pikcer</h-button>
          
          <h-datetime-picker v-model="show" type="datetime" @commit="commit1"></h-datetime-picker>
          <h-datetime-picker v-model="show2" type="date" @commit="commit2"></h-datetime-picker>
          <h-datetime-picker v-model="show3" type="time" @commit="commit3"></h-datetime-picker>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      show2: false,
      show3: false,
      type:'datetime'
    };
  },
  methods: {
    popup() {
      this.show = true;
    },
    popup2() {
      this.show2 = true;
    },
    popup3() {
      this.show3 = true;
    },
    commit1(time){
      this.$msg(`${time}`);
      this.show = false;
    },
    commit2(time){
      this.$msg(`${time}`);
      this.show2 = false;
    },
    commit3(time){
      this.$msg(`${time}`);
      this.show3 = false;
    },
  }
};
</script>

<style lang="scss">
</style>
