// 1、导入 vue这个包 ，得到Vue构造函数
import Vue from "vue";

// 2、导入App.vue根组件,将来要把App.vue中的模板结构，渲染到HTML页面中
import App from "./App.vue";

// 3、解决 因使用开发版的 vue 而导致的控制台提示
Vue.config.productionTip = false;

// 全局注册
import Left from '@/components/Left.vue';

Vue.component('myLeft', Left);

// 4、创建 Vue的实例对象
new Vue({

  // el: '#app',   // has 'el' option  现在注释了没有了
  // template: '',  // has 'template' option?  

  // 把 render函数 指定的组件，渲染到 HTML页面中
  render: h => h(App)

}).$mount('#app')


// Vue 实例 的 $mount() 方法，作用 和 el 属性完全一样


