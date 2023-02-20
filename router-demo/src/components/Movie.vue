<template>
  <div class="movie-container">
    <!-- 直接使用 props 中的mid 接收路由参数 -->
    <h3>Movie 组件 ---{{ this.$route.params.mid }}---{{ mid }}</h3>
    <button @click="showThis">点击打印this看看 路由参数对象</button>
    <hr />

    <button @click="goBack">后退</button>
    <hr />

    <button @click="$router.back()">back 后退</button>
    <button @click="$router.forward()">forward 前进</button>
  </div>
</template>

<script>
export default {
  name: "Movie",
  props: ["mid"], // 使用 props 接收路由规则中匹配到的参数项
  methods: {
    showThis() {
      console.log(this); // 查看这个this 找到存放 id 的位置
    },
    goBack() {
      this.$router.go(-1); //go的参数代表前进或后退的步数（正数为前进，负数为后退）。
    },
  },
};
</script>

<style lang="less" scoped>
.movie-container {
  min-height: 200px;
  background-color: lightsalmon;
  padding: 15px;
}
</style>
