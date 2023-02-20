<template>
  <div class="app-container"> 
    <!--3、 引入 Header组件 的实例 -->
    <Header title="购物车"></Header>

    <!-- 32、先在 App.vue 父组件中 验证 所有商品的勾选状态是 true 还是false  -->
    <!-- {{ fullState }} -->

    <!-- 43、先在 App.vue 父组件中 计算出 合计价格，正确再传给 Footer子组件-->
    <!-- {{amt}} -->

    <!-- 48、 先在 App.vue 父组件中,动态计算 已勾选的商品的购买数量-->
    <!-- {{total}} -->

    <!-- 6、10.1、13、18、21、24、26、50、引入 Goods组件 的实例   -->
    <Good v-for="item in list" :key="item.id"
    :id="item.id"
    :title="item.goods_name"
    :price="item.goods_price"
    :pic="item.goods_img"
    :state="item.goods_state"
    :count = "item.goods_count"
    @state-change="getNewState">
    
    <!-- <p>123</p> 如果没有借助插槽 这个p标签里的 123是不会显示在页面上的 -->
    <Counter :num="item.goods_count" :id="item.id" @num-change="getNewNum(item,$event)"></Counter>

    </Good>

    <!-- 30、36、46、引入 Footer组件的实例  -->
    <Footer :selectAll="fullState" :amount="amt" :all="total" @full-change="getFullChange"></Footer>

  </div>
</template>

<script>
// 1、导入 Header组件
import Header from "@/components/Header/Header.vue";
// 4、导入 Goods组件
import Good from "@/components/Goods/Goods.vue";
// 7、导入 axios 请求库   （先 yarn add axios -S 安装 ）   
import axios from 'axios';
// 28、导入 Footer组件
import Footer from "@/components/Footer/Footer.vue";
// 60、导入 eventBus.js 模块
import bus from '@/components/eventBus.js';


// 导入Counter组件
import Counter from "@/components/Counter/Counter.vue"


export default {
  props: {
    //商品的id
    // 为什么要封装一个 商品的id 的 自定义属性 呢？将来子组件中商品的勾选状态变化之后，
    // 需要通过 子--》父的形式，通知 父组件根据 id 修改对应商品的勾选状态
    id: {
      type: Number,
      default: 0,
    },
    // 商品的购买数量
    count: {
      type: Number,
      default: 1,
    }, 
  },
  // 局部注册组件 私有组件
  components: {
    // 2、5、29、注册 Header 组件，这样就可以以标签的形式来使用 Header组件的实例
    Header, Good, Footer, Counter
  },
  data() { 
    return {
      //10、list 数组容器 接收 axios请求 响应回来的数据
      list: []
    }
  },
  created() {
    
    // console.log(this);
    this.initCartList();   // 9、一般在 created 发起网络请求

    // 61、接受 Counter组件 通过 this.$emit() 传递过来的 数据
    // 数据格式 为 { id，value } ，其中，id 是商品的id, value 是 商品最新的购买数量，
    bus.$on("shareGood", (val) => {
      // console.log("App父组件接收到了Counter组件传递过来的数据了", val);
      // some()循环遍历方法 用于 查找 数组中是否满足条件的元素 ，它的返回值是布尔值，
      this.list.some(item => {
        if (item.id === val.id) {
          item.goods_count = val.value;
          // some() 如果找到了第一个满足条件的元素，就返回 true ，并终止循环，不再循环查找下去 ，如果找不到就返回false
          return true;
        }
      });
    });

  },
  methods: {
    getNewNum(item, e) {
      // console.log(item,e);   //{...} 2
      item.goods_count = e;
    },
    
    // 8、利用 axios 发请求 , 获取 商品数据
     async initCartList() { 
        const { data: res } = await axios.get('https://escook.cn/api/cart');
        if (res.status === 200) { 
          this.list = res.list;
        }
    },
    // 27、接收子组件传递过来的数据  格式为：{id,value} 
    getNewState(StateVal) {
      // console.log("App父组件已接收数据");
      this.list.some(item => {
        if (item.id === StateVal.id) {
          item.goods_state = StateVal.value;
          // some（）如果找到了第一个满足条件的元素，则终止后续的循环
          return true;
        }
      });
    },
    //37、 接收 Footer子组件中 传递过来的 全选状态 
    getFullChange(fullVal) {
      // console.log("App父组件接收到 Footer子组件传递过来的数据了");
      //38、把 Footer子组件中 传递过来的 全选状态 赋值给所有的复选框
      this.list.forEach(item => {
        item.goods_state = fullVal;
      })
    },
  },
  // 计算属性  函数
  computed: {
    // 31、在 App父组件中 动态计算出 全选的状态 是 true 还是 false ，然后 传递给 子组件 Footer
    fullState() {
      return this.list.every(item => item.goods_state === true)
    },

    // 42、先在 App.vue 父组件中 通过 计算属性 amt，动态 把 合计价格 计算出来。 先过滤出已勾选的商品，
    //再来计算： 合计价格  =  判断 所有已勾选的商品，已勾选的商品的价格 + 已勾选的每一个商品的个数
    amt() { 
      return this.list
        .filter(item => { 
          // 先过滤出已勾选的商品
          return item.goods_state
        })
        .reduce((total, item) => { 
          // 再来计算 合计价格
        return total += item.goods_price * item.goods_count
      },0)
    },
    //47、动态计算 已勾选的商品的购买数量  (在 App.vue 父组件中 )
    total() { 
      return this.list.filter(item => {
        // 先过滤出已勾选的商品
        return item.goods_state
      }).reduce((t, item) => {
        return t += item.goods_count
      }, 0);
    },
  },
  // beforeUpdate() { 
  //   console.log("App父组件的beforeUpdate: Goods子组件修改了,App父组件也修改了");
  // }
}
</script>

<style lang="less" scoped>
.app-container {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>
