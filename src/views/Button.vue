<template>
    <div class="demo-page">
        <demo-header></demo-header>
        <div class="demo-btn-list">
            <h-button size="large" type="default" class="demo-btn" @click.native="test">default</h-button>
            <h-button size="large" type="primary" class="demo-btn">primary</h-button>
            <h-button size="large" type="danger" class="demo-btn">danger</h-button>

            <h-button size="normal" type="default" class="demo-btn btn-line ">default</h-button>
            <h-button size="normal" type="primary" class="demo-btn btn-line">primary</h-button>
            <h-button size="normal" type="danger" class="demo-btn btn-line">danger</h-button>
            <br>
            <h-button size="small" type="default" class="demo-btn btn-line">default</h-button>
            <h-button size="small" type="primary" class="demo-btn btn-line">primary</h-button>
            <h-button size="small" type="danger" class="demo-btn btn-line">danger</h-button>
            
            <h-button size="large" type="default" disabled class="demo-btn">default</h-button>
            <h-button size="large" type="primary" disabled class="demo-btn">primary</h-button>
            <h-button size="large" type="danger" disabled class="demo-btn">danger</h-button>

            <h-button size="large" type="default" plain class="demo-btn">default</h-button>
            <h-button size="large" type="primary" plain class="demo-btn">primary</h-button>
            <h-button size="large" type="danger" plain class="demo-btn">danger</h-button>

            <h-button icon="icon-fanhui">
                带自定义图标
            </h-button>
        </div>
        
    </div>
</template>

<script>
export default {
  methods: {
    test() {
    console.debug();
      console.log("test");
    }
  }
};
</script>

<style lang="scss">
.demo-btn-list {
  padding: 0.4rem;
  .demo-btn {
    margin-bottom: 0.3rem;
  }
  .btn-line {
    margin-right: 0.2rem;
  }
}
</style>
