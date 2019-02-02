<template>
    <div class="demo-page">
        <demo-header></demo-header>
        <div class="h-swipe-demo">

            <h4 class="demo-title">基础用法</h4>
            <h-swipe>
                <h-swipe-item>
                    <img src="@/assets/1.jpg" 
                    class="demo-swipe-img" 
                    >
                </h-swipe-item>
                <h-swipe-item>
                    <img src="@/assets/2.jpg" 
                    class="demo-swipe-img">
                </h-swipe-item>
                <h-swipe-item>
                    <img src="@/assets/3.jpg" 
                    class="demo-swipe-img">
                </h-swipe-item>
            </h-swipe>

            <h4 class="demo-title">自定义Indicator</h4>
            <h-swipe 
                indicatorClass="demo-indicator" 
                indicatorActiveClass="demo-indicator-active"
            >
                <h-swipe-item>
                    <img src="@/assets/1.jpg" 
                    class="demo-swipe-img" 
                    >
                </h-swipe-item>
                <h-swipe-item>
                    <img src="@/assets/2.jpg" 
                    class="demo-swipe-img">
                </h-swipe-item>
                <h-swipe-item>
                    <img src="@/assets/3.jpg" 
                    class="demo-swipe-img">
                </h-swipe-item>
            </h-swipe>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.demo-swipe-img {
  width: 100%;
  height: 100%;
}
.demo-indicator {
  width: 0.15rem;
  height: 0.15rem;
  border: 1px solid white;
  border-radius: 50%;
  margin: 0.05rem;
}
.demo-indicator-active {
  background: gray;
}
</style>
