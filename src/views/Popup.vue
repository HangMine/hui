<template>
  <div class="demo-page">
      <demo-header></demo-header>
      <div class="demo-btn-wrap">
          <h-button class="demo-btn" size="large" @click.native="popup">popup</h-button>
          <h-button class="demo-btn" size="large" @click.native="popupTop">popupTop</h-button>
          <h-button class="demo-btn" size="large" @click.native="popupBot">popupBot</h-button>
          <h-button class="demo-btn" size="large" @click.native="popupLef">popupLef</h-button>
          <h-button class="demo-btn" size="large" @click.native="popupRig">popupRig</h-button>

          <h-popup v-model="show">
            <div class="demo-popup-middle">
              我是一个弹窗~
            </div>
          </h-popup>
          <h-popup v-model="showTop" position="top" :shade="false" class="demo-popup-top-wrap">
            <div class="demo-popup-top">
              我是一个从上往下的弹窗~
            </div>
          </h-popup>
          <h-popup v-model="showBot" position="bottom" class="demo-popup-bot-wrap">
            <div class="demo-popup-bot">
              我是一个从下往上的弹窗~
            </div>
          </h-popup>
          <h-popup v-model="showLef" position="left" class="demo-popup-left-wrap">
            <div class="demo-popup-left">
              我是一个从左往右的弹窗~
            </div>
          </h-popup>
          <h-popup v-model="showRig" position="right" class="demo-popup-right-wrap">
            <div class="demo-popup-right">
              我是一个从右往左的弹窗~
            </div>
          </h-popup>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      showTop: false,
      showBot: false,
      showLef: false,
      showRig: false,
    };
  },
  methods: {
    popup() {
      this.show = true;
    },
    popupTop() {
      this.showTop = true;
      setTimeout(() => {
        this.showTop = false;
      }, 1500);
    },
    popupBot() {
      this.showBot = true;
    },
    popupLef() {
      this.showLef = true;
    },
    popupRig() {
      this.showRig = true;
    },
  }
};
</script>

<style lang="scss">
@import "~@/assets/mixin";
.demo-popup-middle {
  padding: 0.2rem;
  background: white;
}
.demo-popup-top-wrap {
  width: 100%;
  text-align: center;
  .demo-popup-top {
    padding: 0.3rem;
    color: white;
    background: rgba(0,0,0,0.7);
  }
}
.demo-popup-bot-wrap {
  width: 100%;
  text-align: center;
  .demo-popup-bot {
    padding: 0.3rem;
    background: white;
  }
}
.demo-popup-left-wrap {
  height: 100%;
  .demo-popup-left {
    @include flex-center;
    height: 100%;
    padding: 0.3rem;
    background: white;
  }
}
.demo-popup-right-wrap {
  height: 100%;
  .demo-popup-right {
    @include flex-center;
    height: 100%;
    padding: 0.3rem;
    background: white;
  }
}
</style>
