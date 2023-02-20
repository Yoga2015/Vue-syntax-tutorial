import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

// 全局自定义指令: 
// 参数 1：字符串，表示全局自定义指令的名字，参数2： 对象，用来接收指令的参数值
Vue.directive('color', {
  // bind 函数只调用 1 次：当指令第一次绑定到元素时调用，当 DOM 更新时 bind 函数不会被触发。
  // el是自定义指令绑定到的DOM元素， binding 来接收 指令的 参数值
  bind(el, binding) {
    el.style.color = binding.value
  },
  // update函数，会在每次 DOM 更新时，都被调用。
  update(el, binding) {
    el.style.color = binding.value
  }
});

// 全局自定义指令:

// 如果bind 和 update 函数的逻辑完全相同，可以简写 ，替换上面的：
Vue.directive('color', function (el, binding) {
  el.style.color = binding.value
});

// 全局过滤器
Vue.filter('过滤器的名字', function () { })

new Vue({
  render: h => h(App),
}).$mount('#app')



