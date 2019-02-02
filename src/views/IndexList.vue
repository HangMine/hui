<template>
  <div class="demo-page">
    <demo-header></demo-header>
    <div class="demo-index-list">
      <h-index-list :data="indexListData"></h-index-list>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      indexListData: [
        {
          title: "A",
          values: ["abc", "acd", "aaa"]
        },
        {
          title: "B",
          values: ["bbc", "bcd", "baa"]
        },
        {
          title: "C",
          values: ["cbc", "ccd", "caa"]
        },
        {
          title: "D",
          values: ["cbc", "ccd", "caa"]
        },
        {
          title: "E",
          values: ["cbc", "ccd", "caa"]
        },
        {
          title: "F",
          values: ["abc", "acd", "aaa"]
        },
        {
          title: "G",
          values: ["bbc", "bcd", "baa"]
        },
        {
          title: "H",
          values: ["cbc", "ccd", "caa"]
        },
        {
          title: "I",
          values: ["cbc", "ccd", "caa"]
        },
        {
          title: "J",
          values: ["cbc", "ccd", "caa"]
        },
        {
          title: "K",
          values: ["abc", "acd", "aaa"]
        },
        {
          title: "L",
          values: ["bbc", "bcd", "baa"]
        },
        {
          title: "M",
          values: ["cbc", "ccd", "caa"]
        },
        {
          title: "N",
          values: ["cbc", "ccd", "caa"]
        },
        {
          title: "O",
          values: ["cbc", "ccd", "caa"]
        },
        {
          title: "P",
          values: ["abc", "acd", "aaa"]
        },
        {
          title: "Q",
          values: ["bbc", "bcd", "baa"]
        },
        {
          title: "R",
          values: ["cbc", "ccd", "caa"]
        },
        {
          title: "S",
          values: ["cbc", "ccd", "caa"]
        },
        {
          title: "T",
          values: ["cbc", "ccd", "caa"]
        },
        {
          title: "U",
          values: ["cbc", "ccd", "caa"]
        },
        {
          title: "V",
          values: ["abc", "acd", "aaa"]
        },
        {
          title: "W",
          values: ["bbc", "bcd", "baa"]
        },
        {
          title: "X",
          values: ["cbc", "ccd", "caa"]
        },
        {
          title: "Y",
          values: ["cbc", "ccd", "caa"]
        },
        {
          title: "Z",
          values: ["cbc", "ccd", "caa"]
        }
      ]
    };
  }
};
</script>

<style lang="scss">
</style>
