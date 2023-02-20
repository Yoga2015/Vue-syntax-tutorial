<template>
  <div class="left-container">
    <h3>Left 组件</h3>

    <!-- 声明一个插槽区域 -->
    <!-- vue 官方规定：每一个 slot插槽，都要有一个name名称 -->
    <!--如果省略了slot 的name属性，则有一个默认的名称叫做 default-->
    <slot name="default"> 
     <p> 这是 default 插槽的默认内容，也叫后备内容，只有在用户没有指定，才会生效</p>  
    </slot>
    <slot name="header"></slot>
    <slot name="main"></slot>
    <slot name="footer"></slot>

  </div>
</template>










<script>
export default {}
</script>

<style lang="less">
.left-container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}
</style>
