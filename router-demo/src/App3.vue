<template>
  <div class="app-container">
    <h1>App3 组件</h1>

    <!-- <a href="#/home">首页</a>
    <a href="#/movie">电影</a>
    <a href="#/about">关于</a> -->

    <router-link to="/home">首页</router-link>

    <router-link to="/movie/1">女娲</router-link>
    <router-link to="/movie/2">玉帝</router-link>
    <router-link to="/movie/3">王母</router-link>

    <router-link to="/about">关于</router-link>
    <hr />

    <!-- 1、只要在项目中安装和配置了 vue-router-->
    <!-- 就可以使用 router-view 这个组件了，用来定义路由的占位符  -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="less" scoped>
.app-container {
  background-color: #efefef;
  overflow: hidden;
  margin: 10px;
  padding: 15px;
  > a {
    margin-right: 10px;
  }
}
</style>
