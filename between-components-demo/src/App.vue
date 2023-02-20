<template>
  <div class="app-container">
    <h1>App 根组件 --- {{countFromSon}}</h1>
    <p>{{userInfo}}</p>

     <div class="box">
      <!-- myLeft组件是全局注册的, msg、user前面不加冒号是传入属性，不是属性值  -->
      <myLeft :msg="message" :user="userInfo"></myLeft>
      <!-- Right 组件 是 私有子组件 -->
      <Right @numChange="getNewCount"> </Right>
     </div>

  </div>
</template>
 
<script>
import Right from '@/components/Right.vue';

export default {
  data() { 
    return {
      message: 'hello walking.vue',
      userInfo: { name: 'zs', age: 20 },
      countFromSon:0,
    }
  },
  // 注册私有子组件
  components: {
      Right
  },
  methods: {
    getNewCount(val) { 
      this.countFromSon = val;
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

