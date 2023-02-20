<template>
  <div class="container">
    <p>son的值: {{ SonCount }}</p>
    <!-- <p>被father修改的值: {{ count }}</p> -->
    <button @click="SonAdd">+1</button>
    <button @click="SonSub">-1</button>
  </div>
</template>

<script>
export default {
  // 在内存中开始创建组件之前   (创建阶段)
  beforeCreate() {
    console.log("son 的 beforeCreate 被触发了");
  },
  // 组件在内存中创建完毕之后    (创建阶段)  发 ajax 请求初始数据
  created() {
    console.log("son 的 created 被触发了");
  },
  // 在把组件初次挂载到页面之前    (创建阶段)
  beforeMount() {
    console.log("son 的 beforeMount 被触发了,son 挂载到父组件之前");
    console.log("son 的 beforeMount中 : mount之前:debugger", this.SonCount + 1);
    debugger;
    
  },
  // 组件初次挂载完毕后    (创建阶段)    操作 DOM 元素
  mounted() {
    console.log("son 的 mounted中 : mount之后 debugger", this.SonCount + 1);
    debugger;
    
    console.log("son 的 mounted 被触发了，son 挂载到父组件了");
  },
  // 在组件被重新渲染之前   （运行阶段）
  beforeUpdate() {
    console.log("son 的 beforeUpdate 被触发了");
  },
  // 组件在页面中被重新渲染完毕  （运行阶段）
  updated() {
    console.log("son 的 updated 被触发了");
  },
  // 在组件被销毁之前    （销毁阶段）
  beforeDestroy() {
    console.log("son 的 beforeDestroy 被触发了");
  },
  // 组件被销毁之后    （销毁阶段）
  destroyed() {
    console.log("son 的 destroyed 被触发了");
  },
  data(){
    return {
      SonCount:1
    }
  },  
  props: {
    count: {
      type: Number,
      default:1,
    }
  },
  methods: {
    SonAdd() {
      this.SonCount += 1;
      this.$emit("numChange", this.SonCount)
    },
    SonSub() {
      this.SonCount -= 1;
      this.$emit("numChange", this.SonCount)
    }
  },
}
</script>

<style lang="less" scoped>
.container{
  background-color: burlywood;
  height: 200px;
  width: 200px;
  margin: auto ;
}
</style>