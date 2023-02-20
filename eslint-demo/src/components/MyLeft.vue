<template>
  <div class="Left-Container">
    <h3>Left组件</h3>
    <button @click="getInfo">get请求</button>
    <button @click="btnGetBooks">获取图书列表的数据</button>
  </div>
</template>

<script>
export default {
  name: "Left",
  methods: {
    async getInfo() {
      const { data: res } = await this.axios({
        method: "GET",
        url: "/api/get",
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
.Left-Container {
  background-color: yellow;
  min-height: 200px;
  flex: 1;
}
</style>
