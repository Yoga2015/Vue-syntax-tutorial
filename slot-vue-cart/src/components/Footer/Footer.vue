<template>
  <div class="footer-container">
    <!-- 左侧的全选 -->
    <div class="custom-control custom-checkbox">
      <!-- 33、子 传 父 使用自定义事件 -->
      <input type="checkbox" class="custom-control-input" id="cbFull" :checked="selectAll" @change="fullChange"/>
      <label class="custom-control-label" for="cbFull">全选</label>
    </div>

    <!-- 中间的合计 -->
    <div>
      <span>合计：</span>     
      <!-- 45 、47 -->
      <span class="total-price">￥{{ amount.toFixed(2) }}</span>
    </div>

    <!-- 结算按钮 -->
    <button type="button" class="btn btn-primary btn-settle">结算（{{ all }}）</button>

  </div>
</template>

<script>
export default {
  // 自定义属性
  props: {
    // 全选按钮
    selectAll: {
      type: Boolean,
      default:true
    },
    //44、总价
    amount: {
      type: Number,
      default:''
    },
    // 49、已勾选的商品的购买数量
    all: {
      type: Number,
      default:0,
    },
  },
  methods: {
    // 34、监听 全选状态
    fullChange(e) {
      // console.log(e.target.checked);
      // 35、通过 this.emit()方法并携带参数，传递 "全选状态" 给 App父组件 ,
      //     App父组件 里 提前定义好了一个事件，这个事件 用来 监听 子组件的触发
      this.$emit("full-change", e.target.checked);
    },
  },
}
</script>

<style lang="less" scoped>
.footer-container {
  font-size: 12px;
  height: 50px;
  width: 100%;
  border-top: 1px solid #efefef;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}

.custom-checkbox {
  display: flex;
  align-items: center;
}

#cbFull {
  margin-right: 5px;
}

.btn-settle {
  height: 80%;
  min-width: 110px;
  border-radius: 25px;
  font-size: 12px;
}

.total-price {
  font-weight: bold;
  font-size: 14px;
  color: red;
}
</style>
