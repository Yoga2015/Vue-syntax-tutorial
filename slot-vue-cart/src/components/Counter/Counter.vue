<template>
  <div class="number-container d-flex justify-content-center align-items-center">

    <!-- 62、给 减 1 的按钮  注册点击事件 通过 赋值 来触发 sub()函数-->
    <button type="button" class="btn btn-light btn-sm" @click="sub">-</button>
    <!-- 52、购买的数量 -->
    <span class="number-box">{{ num }}</span>
    <!-- 58、给 加 1 的按钮 注册点击事件 通过 赋值 来触发 add()函数  -->
    <button type="button" class="btn btn-light btn-sm" @click="add">+</button>

    <!-- 声明一个插槽区域 -->
    <!-- <slot></slot> -->

  </div>
</template>

<script>
// 导入 eventBus.js 模块
import bus from '@/components/eventBus.js';

export default {
  // 自定义属性
  props: {
    // 54、商品的id 。必须 指明 到底是在哪个商品里进行了点击 + 或 - , 改变了商品的数量，
    id: {
      type: Number,
      required:true
    },
    // 51、num 用来 接收 从App根组件-->Good组件-->传给 Counter组件的 购买数量
    num: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    // 59、 点击 + 数值 加 1   
    // 把 当前点击的商品的id + 商品数量值 装入一个对象，
    // 这个对象的数据格式 为 { id，value } ，其中，id 是商品的id, value 是 商品最新的购买数量，
    // 通过 this.$emit() 把 这个obj对象 作为参数 传递给 App组件
    // add() { 
    //   const obj = { id: this.id, value: this.num + 1 };
    //   bus.$emit('shareGood', obj);
    // },
    add() { 
      // 通过自定义事件的方法，把最新的数量值，发给App父组件 
      this.$emit("num-change", this.num + 1);
    },

    // 63、点击 - 数值 减 1   , 传 数据的格式 同上
    // sub() { 
    //   if (this.num - 1 === 0) { 
    //     alert("商品已不够起购数量");
    //     return
    //   }
    //   const obj = { id: this.id, value: this.num - 1 };
    //   bus.$emit('shareGood', obj);
    // },
    sub() { 
      if (this.num - 1 === 0) { 
        alert('商品已不够起购数量');
        return
      }
      this.$emit("num-change",this.num - 1)
    },

  },

}
</script>

<style lang="less" scoped>
.number-box {
  min-width: 30px;
  text-align: center;
  margin: 0 5px;
  font-size: 12px;
}

.btn-sm {
  width: 30px;
}
</style>
