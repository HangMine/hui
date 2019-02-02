<template>
    <div class="demo-page">
       <demo-header></demo-header>
       <div class="demo-btn-wrap">
        <h-button class="demo-btn" size="large" @touchstart.native="msg">弹出提示框</h-button>
        <h-button class="demo-btn" size="large" @touchstart.native="msgtop">位置为上的提示框</h-button>
        <h-button class="demo-btn" size="large" @touchstart.native="msgbot">位置为下的提示框</h-button>
        <h-button class="demo-btn" size="large" @touchstart.native="msglogo">带图标的提示框</h-button>
      </div>
    </div>
    
</template>

<script>
export default {
  methods: {
    msg() {
      this.$msg("这是提示框");
    },
    msgtop() {
      this.$msg({ msg: "位置为上的提示框", position: "top" });
    },
    msgbot() {
      this.$msg({ msg: "位置为下的提示框", position: "bottom" });
    },
    msglogo() {
      this.$msg({ msg: "带图标的提示框", icon: "icon-success_fill" });
    }
  }
};
</script>

<style lang="scss">
</style>
