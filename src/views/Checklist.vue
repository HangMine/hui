<template>
    <div class="demo-page">
        <demo-header></demo-header>

        <div class="demo-checklist">
            <h-checklist 
              v-model="checklist1" 
              :options="checkOption1" 
              title="复选框列表" 
              class="demo-checklist-item"
            ></h-checklist>
            <h-cell title="选中的项">{{checklist1}}</h-cell>
        </div>

         <div class="demo-checklist">
            <h-checklist 
              v-model="checklist2" 
              :options="checkOption2" 
              title="禁用且最多选两个的复选框列表" 
              :max=2 
              class="demo-checklist-item" 
            ></h-checklist>
            <h-cell title="选中的项">{{checklist2}}</h-cell>
        </div>

        <div class="demo-checklist">
            <h-checklist 
              v-model="checklist3" 
              :options="checkOption3" 
              title="右对齐的复选框列表" 
              class="demo-checklist-item" 
              align="right"
            ></h-checklist>
            <h-cell title="选中的项">{{checklist3}}</h-cell>
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
      checklist1: [],
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
          value: 3
        },
        {
          label: "选项4",
          value: 4
        }
      ],
      checklist2: [2],
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
      checklist3: [1, 2],
    };
  }
};
</script>

<style lang="scss">
.demo-checklist {
  .demo-checklist-item {
    margin-bottom: 0.4rem;
  }
}
</style>
