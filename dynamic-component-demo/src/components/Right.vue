<template>
  <div class="right-container">
    <h3>Right 组件----{{ count }}</h3>
    <button @click="count += 1">+1</button>

  </div>
</template>

<script>
export default { 
  // 当提供了name属性之后，组件的名称，就是name属性的值
  name: "MyRight",
  
  data() {
    return {
      count: 0
    }
  },
  // 1、组件在内存中创建完毕之后
  created() {
    console.log("Right 组件被创建了");
  },
  //组件被销毁之后
  destroyed() {
    console.log("Right 组件被销毁了");
  },
  //2、 Right组件被激活了
  activated() {
    console.log("Right 组件被激活了,activated");
  },
  //3、 Right组件被缓存了
  deactivated() {
    console.log("Right 组件被缓存了,deactivated");
  },
}
</script>

<style lang="less" scoped>
.right-container {
  padding: 0 20px 20px;
  background-color: lightskyblue;
  min-height: 250px;
  flex: 1;
}
</style>








