<template>
  <div class="demo-page">
      <demo-header></demo-header>
      <div class="demo-btn-wrap">
          <h-button class="demo-btn" size="large" @click.native="alert">弹出alert框</h-button>
          <h-button class="demo-btn" size="large" @click.native="confirm">弹出confirm框</h-button>
          <h-button class="demo-btn" size="large" @click.native="prompt">弹出prompt框</h-button>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    alert() {
      this.$msgBox.alert("这是alert框").then(() => console.log("确定回调"));
    },
    confirm() {
      this.$msgBox
        .confirm("这是confirm框","确定关闭嘛?")
        .then(() => console.log("确定回调"), () => console.log("取消回调"));
    },
    prompt() {
      this.$msgBox
        .prompt("这是prompt框")
        .then(res => console.log(res), () => console.log("取消回调"));
    }
  }
};
</script>

<style lang="scss">
</style>
