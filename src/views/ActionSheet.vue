<template>
  <div class="demo-page">
      <demo-header></demo-header>
      <div class="demo-btn-wrap">
          <h-button class="demo-btn" size="large" @click.native="actionSheet">带取消按钮</h-button>
          <h-button class="demo-btn" size="large" @click.native="actionSheet2">不带取消按钮</h-button>

          <h-action-sheet v-model="show" :cancelText="cancelText"></h-action-sheet>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      show:false,
      cancelText: '取消'
    }
  },
  methods: {
    actionSheet() {
      this.cancelText='取消';
      this.show = true;
    },
    actionSheet2() {
      this.cancelText='';
      this.show = true;
    }
  }
};
</script>

<style lang="scss">
</style>
