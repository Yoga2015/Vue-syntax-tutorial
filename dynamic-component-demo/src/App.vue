<template>
  <div class="app-container">
    <h1>App 根组件</h1>  

    <button @click="comName='Left'">展示Left</button>
    <button @click="comName='Right'">展示Right</button><hr>

    <div class="box">
      <!-- 渲染 Left 组件 和 Right组件 -->
      <!--1、<component> 标签是vue内置的，作用：组件的占位符 -->
      <!--2、is 属性的值，表示要渲染的组件的名字 -->
      <!--3、is 属性的值，应该是组件在components节点下的注册名称 -->

      <!-- keep-alive 可以把内部的组件进行缓存，而不是销毁组件 -->
      <!-- include 属性，用来 指定 哪些组件 需要被缓存。多个组件之间使用英文的逗号分隔 -->
      <!-- exclude属性 ，用来 指定哪些组件 不需要被缓存。 -->
      <keep-alive include="MyLeft,MyRight" >
          <component :is="comName"></component>
      </keep-alive>    

    </div>

  </div>
</template>
 
<script>
// 1、导入需要使用的.vue组件
import Left from '@/components/Left.vue';
import Right from '@/components/Right.vue';

export default {
  // 2、注册私有子组件
  components: {
    Left,Right,
  },
  data() { 
    return {
      // comName 表示要展示的组件
      comName:'Left'
    }
  }
}
</script>
 
<style lang="less">
.app-container {
  padding: 1px 20px 20px;
  background-color: #efefef;
}

.box {
  display: flex;
}
</style>

