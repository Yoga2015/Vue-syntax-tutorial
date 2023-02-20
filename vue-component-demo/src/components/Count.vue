<template>
     <div>
          <H5>Count 组件</H5>
          <p>count的值是:{{ count }}</p>
          <button @click="count += 1 "> +1 </button>
          <button @click="show"> 打印init </button>
     </div>
</template>

<script>
export default {
     // 注册 私有子组件     可被在 main.js 进行全局注册组件代替
     // component: {
     //      Left,
     //      Right
     // }
     
     // props 是自定义属性，允许使用者通过自定义属性 ，为当前组件指定初始值
     // 自定义属性的名字，是封装者自定义的（只要名称合法即可）
     // props 中 的数据，可以直接在模板结构中被使用
     // 注意：props 是只读的，不要直接修改 props的值，否则会报错！

     // props:['init'],   这种数组格式的 props 不能指定默认值
     props: { 
          // 实际开发中更多是如下这样的写法，而不是上述数组的写法。
          // 自定义属性A: {/* 配置选项 */},
          // 自定义属性B: {/* 配置选项 */},
          // 自定义属性C: {/* 配置选项 */},
          init: {
            // 如果外界使用 Count 组件的时候，没有传递 init 属性，则默认值生效
               default: 0,   // 用 default属性 定义 属性的默认值

            //用 type 属性定义属性的值类型，如果传递过来的值不符合此类型，否则报错
               type: Number,   // init 的值类型 必须是 Number 数字

               // required 属性 ，将 属性 设置为必填项
               required: true,
          }
     },

     data() { 
          return {
               // count:0
               // 把 props 中的init值，转存到 count 上
               count: this.init,   // 各个组件中的 init 初始值都不一样    
           }
     },
     methods: {
          show() { 
               console.log(this.init);
          }
     }
 }
</script>

<style> </style>

