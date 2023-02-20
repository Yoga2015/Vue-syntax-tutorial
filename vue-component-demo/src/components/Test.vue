<template>

  <div class="test-container">
      <h3 id="dom">Test 组件  {{ books.length }} 本书</h3>
      <p id="ppp">message的值是:{{message}}</p>
      <button @click="message +='~'">点击改变 message的值</button>
  </div>

</template>

<script>
export default {
  props: ['info'],
  data() { 
    return {
      message: 'hello Test.vue!',
      // 定义books数组，存储的是所有图书的列表数据.默认为空数组
      books:[],
    }
  },
  methods: {
    show() { 
      console.log('调用了Test组件的show方法!');
    },

    // 使用 Ajax 请求图书列表的数据
    initBookList() { 

      const xhr = new XMLHttpRequest();
      xhr.addEventListener('load', () =>{
        const result = JSON.parse(xhr.responseText);
        console.log(result);
        this.books = result.data;
      });
      xhr.open('GET', 'http://www.liulongbin.top:3006/api/getbooks');
      xhr.send();
    },


  },

  // 创建阶段的第一个生命周期函数,这阶段不用怎么理会
  beforeCreate() { 
    // console.log(this.info);
    // console.log(this.message);
    // this.show();
  },

  //created 阶段   常在这个阶段 发起 Ajax请求
  created(){
    // console.log(this.info);
    // console.log(this.message);
    // this.show();
    this.initBookList();

    // const dom = document.querySelector('#dom');
    // console.log(dom);   //返回 null，是因为 页面 UI结构 还没渲染出来
  },

  // beforeMount 阶段
  beforeMount() { 
    // console.log('beforeMount');   // beforeMount
    // const dom = document.querySelector('#dom');
    // console.log(dom);   //返回 null，是因为 页面 UI结构 还没渲染出来
  },

  // mounted 阶段 已经把内存中的 HTM结构 ，成功的渲染到了浏览器中。此时可操作 DOM 元素；
  // 如果要操作 当前组件的DOM 最早，只能在 mounted 阶段执行
  mounted() { 
    const dom = document.querySelector('#dom');
    console.log(dom); 
  },

  //beforeUpdate阶段 将要 根据变化过后、最新的数据，重新渲染 组件的模板结构。
  beforeUpdate() {
    console.log('beforeUpdate');
    console.log(this.message);  //data中的数据是最新的
    const ppp = document.querySelector('#ppp');
    console.log(ppp.innerHTML);
  },

  // updated 阶段
  updated() {
    console.log('updated');
    console.log(this.message);  //data中的数据是最新的
    const ppp = document.querySelector('#ppp');
    console.log(ppp.innerHTML);
  },

  // beforeDestroy 阶段， 将要销毁 此组件，此时 尚未销毁，组件还处于 正常工作 的状态
  beforeDestroy() { 
    console.log('beforeDestroy');
    console.log(this.message);
  },

  // destroyed 阶段 ，组件已经被销毁，此组件在浏览器中对应的 DOM结构 已被完全移除
  destroyed() { 
    console.log('destroyed');
    // console.log(this.message);
  }

}
</script>

<style lang="less">
.test-container{
    background-color: pink;
    height: 200px;
    width: 400px;
}
</style>

