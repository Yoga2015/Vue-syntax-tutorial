<template>
  <div class="app-container">
    <h1>App 根组件</h1>
    <a href="#/home" >首页</a>
    <a href="#/movie">电影</a>
    <a href="#/about">关于</a><hr />

    <!-- 通过is属性，指定要展示的组件的名称 -->
      <component :is="comName"></component>

  </div>
</template>

<script>
import Home from '@/components/Home.vue'
import Movie from '@/components/Movie.vue'
import About from '@/components/About.vue'
export default {
  name: 'App',
  data() { 
    return {
      // 在动态组件的位置，要展示的组件的名字，值必须是字符串
      comName:'Home'
    }
  },
  created() { 
    // 只要当前的App 组件一被创建，就立即监听 window对象的 onhashchange事件
    // window.onhashchange = function () { };
    window.onhashchange = () => {
      console.log('监听了hash地址的变化', location.hash);
      switch (location.hash) { 
        case '#/home':
          this.comName = 'Home';
          break;
        case '#/movie':
          this.comName = 'Movie';
          break;
        case '#/about':
          this.comName = 'About';
          break;
      }
    }
  },
  // 注册组件
  components: {
    Home,
    Movie,
    About
  }
}
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
