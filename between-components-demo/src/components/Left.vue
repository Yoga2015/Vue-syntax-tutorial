<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <p>message的值是: {{msg}}</p>
    <p>user的值是: {{user}}</p>
    <button @click="msg = 'abc'">修改msg</button>
    <button @click="user.name='lisi'">修改user</button>
    <hr>

    <button @click="send">给兄弟关系的 Right组件发送古文</button>
  </div>
</template>

<script>
// 1、先导入 eventBus.js 模块
import bus from '@/components/eventBus.js';
export default {
  props: ['msg', 'user'],
  data() { 
    return {
      str:'唧唧复唧唧,木兰当户织.'
    }
  },
  methods: {
    send() { 
      // 2、通过 eventBus 来发送数据
      bus.$emit('share',this.str)
    }
  }    
}
</script>

<style lang="less" scoped>
.left-container {
      padding: 0 20px 20px;
      background-color: orange;
      min-height: 250px;
      flex: 1;
    }
  h3{
    color: red;
  }
</style>








