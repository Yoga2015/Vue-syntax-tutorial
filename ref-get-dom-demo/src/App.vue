<template>
  <div class="app-container">
    <h1 ref="myh1">App 根组件</h1> <hr />
    <button @click="showThis">打印 this</button> 
    <button @click="onReset">重置Left组件的count值为0</button><hr>

    <input type="text" v-if="inputVisible" @blur="showBtn" ref="iptRef" />
    <button v-else @click="showInput">展示输入框</button>

    <div class="box">
      <Left ref="comLeft"></Left>
    </div>
  </div>
</template>
 
<script>
import Left from '@/components/Left.vue';
export default {
  data() { 
    return {
      // 控制 文本框 和 按钮 的按需切换
      inputVisible: false
    }
  },
  methods: {
    // 点击按钮展示输入框
    showInput() {
      // 1、切换布尔值，把文本框展示出来
      this.inputVisible = true;
      // 2、让展示的文本框自动获得焦点
      // this.$refs.iptRef.focus();
      console.log(this.$refs.iptRef);
    },
    // 输入框失去焦点展示按钮
    showBtn() { 
      this.inputVisible = false;
    },
    // 使用 ref 引用 DOM 元素
    showThis() {
      // this 是 当前 App组件的实例对象，默认情况下，this $refs 指向一个空对象。
      console.log(this.$refs.myh1);
      this.$refs.myh1.style.color = 'red';
    },
    // 使用 ref 引用 组件实例
    onReset() { 
      // 点击 按钮 重置Left组件的count值为0
      console.log(this);
      console.log(this.$refs.comLeft.count);
      this.$refs.comLeft.count = 0;
    },   
  },
  components: {
    Left
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

