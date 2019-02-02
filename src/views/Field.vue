<template>
    <div class="demo-page">
        <demo-header></demo-header>
        <div class="demo-field">
            <h-field
                v-for="(item,index) of data"
                :key="index"
                v-model="item.value"
                :type="item.type"
                :title="item.title"
                :placeholder="item.placeholder"
            ></h-field>
        </div>

        <div class="demo-field">
            <h-field
                v-for="(item,index) of data2"
                :key="index"
                v-model="item.value"
                :type="item.type"
                :title="item.title"
                :placeholder="item.placeholder"
                :state="item.state"
            ></h-field>
        </div>
        
        <div class="demo-field">
            <h-field
                v-for="(item,index) of data3"
                :key="index"
                v-model="item.value"
                :type="item.type"
                :title="item.title"
                :placeholder="item.placeholder"
                :state="item.state"
            ></h-field>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          value: "",
          type: "text",
          title: "用户名",
          placeholder: "请输入用户名"
        },{
          value: "",
          type: "mail",
          title: "邮箱",
          placeholder: "请输入邮箱"
        },{
          value: "",
          type: "password",
          title: "密码",
          placeholder: "请输入密码"
        },
        {
          value: "",
          type: "textarea",
          title: "自我介绍",
          placeholder: "请输入自我介绍"
        },
      ],
      data2: [
        {
          value: "",
          type: "mail",
          title: "",
          placeholder: "登陆邮箱"
        },{
          value: "",
          type: "password",
          title: "",
          placeholder: "密码"
        }
      ],
      data3: [
        {
          value: "",
          type: "mail",
          title: "邮箱",
          placeholder: "成功状态",
          state: "success"
        },{
          value: "",
          type: "mail",
          title: "邮箱",
          placeholder: "失败状态",
          state: "error"
        },{
          value: "",
          type: "mail",
          title: "邮箱",
          placeholder: "警告状态",
          state: "warning"
        },
      ],
    };
  }
};
</script>

<style lang="scss">
.demo-field{
    margin-bottom: .4rem;
}
</style>
