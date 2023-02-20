<template>
  <div class="left-container">
    <h3>Left 组件----{{ count }}</h3>
    <button @click="count += 1">+1</button>
  </div>
</template>

<script>
export default {
  // 当提供了name属性之后，组件的名称，就是name属性的值
  name: "MyLeft",

  data() { 
    return {
      count:0
    }
  },
  // 1、组件在内存中创建完毕之后
  created() { 
    console.log("Left 组件被创建了");
  },
  //组件被销毁之后
  destroyed() { 
    console.log("Left 组件被销毁了");
  },
  //2、 Left组件被激活了
  activated() { 
    console.log("Left 组件被激活了,activated");
  },
  //3、 Left组件被缓存了
  deactivated() { 
    console.log("Left 组件被缓存了,deactivated");
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
</style>








