# between-components-demo
between-components-demo 项目 ，主要是 分析组件之间的关系，从而实现组件之间如何传递数据

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### vue 项目的运行流程
在工程化的项目中，vue 要做的事情很单纯：通过 main.js 把 App.vue 渲染到 index.html 的指定区域中。其中：

① App.vue 用来编写待渲染的模板结构
② index.html 中需要预留一个 el 区域
③ main.js 把 App.vue 渲染到了 index.html 所预留的区域中
