<template>
  <div class="rightContainer">
    <h3>Right组件</h3>
    <button @click="postInfo">post请求</button>
    <button @click="btnGetBooks">获取图书列表的数据</button>
  </div>
</template>

<script>
export default {
  methods: {
    // post请求
    async postInfo() {
      const { data: res } = await this.axios({
        method: "POST",
        url: "/api/post",
        data: {
          name: "zs",
          age: 20,
        },
      });
      console.log(res);
    },

    // 点击按钮，获取图书列表的数据
    async btnGetBooks() {
      const { data: res } = await this.axios({
        method: "GET",
        url: "/api/getbooks",
      });
      console.log(res);
    },
  },
};
</script>

<style lang="less" scoped>
.rightContainer {
  background-color: orange;
  min-height: 200px;
  flex: 1;
}
</style>
