<template>
  <div id="app">
    <h3>App组件</h3>
    <div class="box">
      <MyLeft></MyLeft>
      <MyRight></MyRight>
    </div>
  </div>
</template>

<script>
// 导入MyLeft、MyRight组件
import MyLeft from "@/components/MyLeft.vue";
import MyRight from "@/components/MyRight.vue";

export default {
  name: "App",
  // 局部注册
  components: {
    MyLeft,
    MyRight,
  },
};
</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .box {
    display: flex;
  }
}
</style>
