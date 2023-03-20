// 引入 snabbdom 库
const snabbdom = window.snabbdom;

// 将 vnode (虚拟节点) 塞入 空的容器中
const patch = snabbdom.init([
  snabbdom_class,
  snabbdom_props,
  snabbdom_style,
  snabbdom_eventlisteners
])

// 创建 vnode（虚拟节点） h函数 是用来 产生 虚拟节点(vnode)
const h = snabbdom.h

// 空的容器
const container = document.getElementById('#container');
// 获取 按钮节点
const btn = document.getElementById('btn');

// 创建 vnode   元素选择器选择的元素 ，属性，子项    
const vnode = h('ul#list', {}, [
  h('li.item', {}, '第一项'),
  h('li.item', {}, '第二项'),
])

// 通过 patch 将 vnode 装入 空的容器
patch(container, vnode);

btn.addEventListener('click', () => {
  const newVnode = h('ul#list', {}, [
    h('li.item', {}, '第一项'),
    h('li.item', {}, '第二项111'),
    h('li.item', {}, '第三项'),
  ]);

  // 用 新的vnode 去更新（替换） 老的vnode
  patch(vnode, newVnode);

  // 下一次就可以拿到最新的进行比较了
  vnode = newVnode;
})