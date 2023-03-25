<template>
  <div class="app-container">

    <h1 v-color="changeColor">App 根组件</h1>
    <h5 v-color="'yellow'">测试</h5>

    <button @click="changeColor = 'green'">改变 color的颜色值</button>
    <hr />


    <!-- 渲染 Article 组件 -->
    <Article>
      <template #title>
        <h3>header-box</h3>
      </template>

      <!-- <template #content="scope"> -->
      <!-- <template #content="{ msg }"> -->
      <template #content="{ msg, user }">
        <h3>content-box</h3>
        <!-- <p>{{ scope }}</p> -->
        <!-- 下面是只想获取 msg 的值 -->
        <!-- <p>{{ scope.msg }}</p> -->
        <p>{{ msg }}</p>
        <p>{{ user.name }}</p>
      </template>

      <template #author>
        <h3>footer-box</h3>
      </template>
    </Article>

    <!-- 渲染 Left 组件 -->
    <div class="box" style="display: none;">
      <!-- 渲染 Left 组件 -->
      <Left>
        <!-- 1、如果要把内容填充到指定名称的插槽中，需要使用v-slot:这个指令 -->
        <!-- 2、 v-slot ：后面要跟上插槽的名字 -->
        <!-- 3、 v-slot ： 指令不能直接用在元素身上，必须用在template标签上  -->
        <!-- 4、template这个标签，它是一个虚拟的标签，只起到包裹性质的作用，
        但是不会被渲染为任何实质性的HTML元素 -->
        <!-- v-slot: 指令的简写形式是 # -->
        <template #default>
          <p>这是在 Left组件的内容区域,声明的p标签</p>
        </template>
      </Left>
    </div>

  </div>
</template>

<script>
// 导入 Left、article组件
import Left from "@/components/Left.vue";
import Article from "@/components/Article.vue";

export default {
  // 局部注册组件
  components: {
    Left, Article
  },
  data() {
    return {
      changeColor: "red"
    }
  },
  // 私有自定义指令的节点
  directives: {
    // 定义名为 color 的 自定义指令 ，指向一个配置对象，里面有一个bind()方法，
    // bind()方法的 第一个形参 el 是 固定写法，是原生DOM对象，是指令绑定的元素。这里指 h1、h5标签
    //             第二个形参 是 binding ，是用来 接收 自定义指令的 参数值。
    color: {

      // 指令 与 元素 在内存中成功绑定时, 会自动 立即触发 bind函数,形参中的el 表示 当前指令所绑定到的那个 DOM对象
      bind(el, binding) {
        console.log("触发了v-color自定义指令的bind方法", el);
        console.log(binding);
        el.style.color = 'green';
        // el.style.color = binding.value;
      },
    },
  },

  //函数简写： 如果bind和update函数中的逻辑完全相同，则对象格式的自定义指令可以简写成函数格式：
  color(el, binding) {
    console.log("触发了v-color自定义指令的update函数", el);
    el.style.color = binding.value;     // 如果逻辑完全相同
  },

  // // 在 DOM 更新的时候，就会触发update（）函数
  // update(el, binding) {
  //   console.log("触发了v-color自定义指令的update函数", el);
  //   el.style.color = binding.value;
  // },

  
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

