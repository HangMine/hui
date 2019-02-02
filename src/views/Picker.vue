<template>
  <div class="demo-page">
      <demo-header></demo-header>
      <div class="demo-picker">
          <h4 class="demo-title">单列picker</h4>
          <h-picker :slots="pickerData" @change="change1"></h-picker>
          <h4 class="demo-title">两列分隔符picker</h4>
          <h-picker :slots="pickerData3" @change="change3"></h-picker>
          <h4 class="demo-title">多列分隔符picker</h4>
          <h-picker :slots="pickerData2" @change="change2"></h-picker>
          
      </div>
  </div>
    
</template>

<script>
export default {
  data() {
    return {
      pickerData: [
        {
          values: ["1", "2", "3", "4", "5", "6", "7"]
        }
      ],
       pickerData2: [
        {
          values: ["1", "2", "3", "4", "5", "6", "7"],
        },
        {
          divider:true
        },
        {
          values: ["1", "2", "3", "4", "5", "6", "7"],
        },
        {
          divider:true
        },
        {
          values: ["1", "2", "3", "4", "5", "6", "7"],
        }
      ],
       pickerData3: [
        {
          values: ["广东"],
          align:'right'
        },
        {
          divider:true
        },
        {
          values: ["广州","深圳","佛山","中山"],
          align:'left'
        }
      ]
    };
  },
  methods:{
    change1(picker,values){
      console.log(values);
    },
    change3(picker,values){
      console.log(values);
    },
    change2(picker,values){
      console.log(values);
    }
  }
};
</script>

<style lang="scss">
</style>
