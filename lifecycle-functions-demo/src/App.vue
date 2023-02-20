<template>
  <div id="app">
      <p>father的值: {{FCount}}</p>
      <button @click="add">+1</button>
      <button @click="sub">-1</button>
      
      <Son :count="FCount" @numChange="getNewNumber"></Son>
      <Son2 :count="FCount" @numChange="getNewNumber"></Son2>
  </div>
</template>

<script>
// 导入 son组件
import Son from '@/components/son.vue'
import Son2 from '@/components/son2.vue'
export default {
  // 在内存中开始创建组件之前   (创建阶段)
  beforeCreate() { 
    console.log("father 的 beforeCreate 被触发了");
  },
  // 组件在内存中创建完毕之后    (创建阶段)
  created() { 
      console.log( "father 的 created 被触发了");
  },
  // 在把组件初次挂载到页面之前    (创建阶段)
  beforeMount() {
    console.log("father 的 beforeMount 被触发了,father挂载页面之前");
    console.log("father 的 beforeMount中 : mount之前 debugger", this.FCount + 1);
    debugger;
  },
  // 组件初次挂载完毕后    (创建阶段)
  mounted() { 
    console.log("father 的 mounted中: mount之后: debugger", this.FCount + 1);
    debugger;
    console.log("father 的 mounted 被触发了,father挂载到页面了");
  },
  // 在组件被重新渲染之前   （运行阶段）
  beforeUpdate() { 
    console.log("father 的 beforeUpdate 被触发了");
  },
  // 组件在页面中被重新渲染完毕  （运行阶段）
  updated() { 
    console.log("father 的 updated 被触发了");
  },
  // 在组件被销毁之前    （销毁阶段）
  beforeDestroy() { 
    console.log("father 的 beforeDestroy 被触发了");
  },
  // 组件被销毁之后    （销毁阶段）
  destroyed() { 
    console.log("father 的 destroyed 被触发了");
  },
  data() { 
    return {
      // ACount 不仅用来当作初始值，将来还用于 接收子组件传递过来的数
      FCount:1
    }
  },
  methods: {
    add() {
       this.FCount += 1;
    },
    sub() {
      this.FCount -= 1;
    },
    getNewNumber(sonVal) { 
      this.FCount = sonVal;
    }
  },
  //  局部注册组件
  components: {
    Son,Son2
  },
}
</script>

<style lang="less" scoped>
#app {
  text-align: center;
  margin-top: 50px;
  height: 500px;
  width: 500px;
  background-color: yellow;
  padding: 50px;
}
</style>
