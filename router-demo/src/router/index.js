// 1、导入 vue 、vue-router
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home.vue";
import Movie from "@/components/Movie.vue";
import About from "@/components/About.vue";
import Tab1 from "@/components/tabs/Tab1.vue";
import Tab2 from "@/components/tabs/Tab2.vue";

import Main from "@/components/Main.vue";
import Login from "@/components/Login.vue";

// 2、 安装 VueRouter
// Vue.use函数 的作用，就是用来安装 插件的
Vue.use(VueRouter);

// 3、创建路由的实例对象
const router = new VueRouter({
  // routes是一个数组，作用:定义 hash地址 与 组件之间的对应关系
  routes: [
  
    // 重定向路由规则: 当用户访问 / 的时候，通过 redirect 属性跳转到 /home 对应的路由规则
    { path: "/", redirect: "/home" },

    // 路由规则 : {路由路径 , 跳转到组件}
    { path: "/home", component: Home },   // Home组件 的路由规则

    // 动态路由：路由中的动态参数 以 ：进行声明 ，冒号后面是动态参数的名称
    // 需求：在Movie组件中，希望根据 id 的值，展示对应电影的详情信息
    // 可以为路由规则开启props 传参，从而方便的拿到动态参数的值
    { path: '/movie/:mid', component: Movie, props:true },    // Movie组件 的路由规则
    
    {
      // About组件 的路由规则 （父级路由规则）
      path: "/about",
      component: About,
      // 给 '/about' 加个重定向
      redirect: "/about/tab1",
      children: [
        // 1、通过 children 属性 ，嵌套声明子级路由规则   /tab1 可以不加斜线
        // 默认子路由：如果 children 数组中，某个路由规则的 path值 为 空字符串，则这条路由规则，叫做 "默认子路由"
        { path: "tab1", component: Tab1 }, // 2、访问 /about/tab1 时，展示 Tab1组件
        { path: "tab2", component: Tab2 }, // 3、访问 /about/tab2 时，展示 Tab2组件
      ],
    },

    // 导航守卫 控制访问权限 路由规则
    { path: '/main', component: Main },
    {path:'/login',component:Login},

  ],
  
});

// 5、为 router实例对象 ，声明 全局前置守卫
// 只要发生了路由的跳转，必然会触发 路由实例对象的 beforeEach()方法 指定的 function 回调函数
// function 回调函数 就是 守卫方法
router.beforeEach(function (to, from, next) {
  // to 是 将要访问的 路由 的信息对象
  console.log(to);
  // from 是 将要离开的 路由 的信息对象
  console.log(from);
  // next 是一个函数，调用 next() 表示放行，允许这次路由导航（路由跳转）
  next();
});

router.beforeEach(function (to, from, next) {
  // console.log(to);
  // 分析：
  // 1、要拿到 用户 将要访问的 hash地址  ，怎么拿？
  // 2、判断 hash 地址是否等于 /main
  // 2.1、如果 等于 /main，则需要登录之后才能访问
  // 2.2、如果 不等于 /main，则不需要登录，直接放行 next()
  // 3、如果 访问的地址是 /main，则需要读取 localStorage中的 token值
  // 3.1、如果有token，则放行
  // 3.2、如果没有token，则强制跳转到/login登录页面
  if (to.path === '/main') {
    const token = localStorage.getItem('token')
    // console.log(token);   此时这里是 null
    if (token) {
      next();    //访问的是后台主页，且有token的值
    } else {
      // this.$router.push('/login')
      next('/login')   //访问的是后台主页，但是没有token的值
    }
  } else {
    next();   //访问的不是后台主页，直接放行
  }
});

// 4、向外共享路由的实例对象
export default router;

//下载并安装 第三方包 vue-router， 然后导入 项目中，
// 然后使用 Vue.use()函数 把 vue-router 安装为 Vue的插件

