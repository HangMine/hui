<template>
    <div class="demo-page">
        <demo-header></demo-header>

        <div class="demo-radio">
            <h-radio 
              v-model="radio1" 
              :options="checkOption1" 
              title="单选框列表" 
              class="demo-radio-item"
            ></h-radio>
            <h-cell title="选中的项">{{radio1}}</h-cell>
        </div>

         <div class="demo-radio">
            <h-radio 
              v-model="radio2" 
              :options="checkOption2" 
              title="禁用的单选框列表" 
              class="demo-radio-item" 
            ></h-radio>
            <h-cell title="选中的项">{{radio2}}</h-cell>
        </div>

        <div class="demo-radio">
            <h-radio 
              v-model="radio3" 
              :options="checkOption3" 
              title="右对齐的单选框列表" 
              class="demo-radio-item" 
              align="right"
            ></h-radio>
            <h-cell title="选中的项">{{radio3}}</h-cell>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      checkOption1: [
        {
          label: "选项1",
          value: 1
        },
        {
          label: "选项2",
          value: 2
        },
        {
          label: "选项3",
          value: 3
        }
      ],
      radio1: '',
      checkOption2: [
        {
          label: "选项1",
          value: 1,
          disabled: true
        },
        {
          label: "选项2",
          value: 2,
          disabled: true
        },
        {
          label: "选项3",
          value: 3,
          disabled: true
        },
        {
          label: "选项4",
          value: 4,
          disabled: true
        }
      ],
      radio2: 2,
      checkOption3: [
        {
          label: "选项1",
          value: 1
        },
        {
          label: "选项2",
          value: 2
        },
        {
          label: "选项3",
          value: 3
        }
      ],
      radio3: 1,
    };
  }
};
</script>

<style lang="scss">
.demo-radio {
  .demo-radio-item {
    margin-bottom: 0.4rem;
  }
}
</style>
