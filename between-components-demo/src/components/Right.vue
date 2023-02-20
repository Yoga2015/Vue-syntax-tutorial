<template>
  <div class="right-container">
    <h3>Right 组件 --- {{count}}</h3>
    <button @click="add">+1</button><hr>
     <p>{{ msgFromLeft }}</p>
  </div>
</template>

<script>
// 1、先导入 eventBus.js 模块
import bus from '@/components/eventBus.js';

export default { 
  data() { 
    return {
      // 子组件 自己的数据，将来希望把 count 值传给父组件
      count: 0,
      msgFromLeft:'',
    }
  },
  created() { 
     // 2、为 bus 绑定自定义事件 ，即绑定、监听 share 事件
    bus.$on('share', (val) => { 
      console.log('在 Right 组件中定义的share被触发了!',val);
      this.msgFromLeft = val;
    })
  },
  methods: {
    add() { 
      // 让 子组件 的 count值 自增 +1
      this.count += 1;
      // 把自增的结果，通过 this.$emit()方法传给父组件 
      this.$emit('numChange',this.count)
    },
  }
}
</script>

<style lang="less" scoped>
.right-container {
  padding: 0 20px 20px;
  background-color: rgb(0, 187, 255);
  min-height: 250px;
  flex: 1;
}
  h3{
    color:yellow;
  }
</style>














