<template>
  <div class="home-container">
    <h3>Home 组件</h3>
    <button @click="gotoIndex">通过 push 跳转到'女娲'页面</button>
    <button @click="gotoIndex2">通过 replace 跳转到'女娲'页面</button>
    <hr />

    <router-link to="/main">访问后台主页</router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    gotoIndex() {
      // 通过编程式导航API ,导航跳转到指定的页面
      this.$router.push("/movie/1");
    },
    gotoIndex2() {
      this.$router.replace("/movie/1");
    },
  },
};
</script>

<style lang="less" scoped>
.home-container {
  min-height: 200px;
  background-color: pink;
  padding: 15px;
}
</style>
