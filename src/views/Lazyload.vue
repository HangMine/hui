<template>
    <div class="demo-lazyload">
        <demo-header></demo-header>
        <div>
          <img class="img-lazy" :src="img" v-for="(img,index) of imgList" :key="index" v-inview="['test2','test3']">

        </div>
        
    </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [
        require("@/assets/1.jpg"),
        require("@/assets/2.jpg"),
        require("@/assets/3.jpg"),
        require("@/assets/4.jpg"),
        require("@/assets/5.jpg"),
        require("@/assets/6.jpg"),
        require("@/assets/7.jpg"),
        require("@/assets/8.jpg"),
        require("@/assets/9.jpg"),
        require("@/assets/10.jpg")
      ]
    };
  }
};
</script>

<style lang="scss">
.test2{
    transform: translate3d(100%,0,0);
}
.test3{
    transform: translate3d(0,0,0);
    
}

// .demo-lazyload{
//     height: 500px;
// }
.img-lazy {
  width: 100%;
}

// [lazy="loaded"] {
//   opacity: 1;
//   transform: rotate(0);
// }
</style>
