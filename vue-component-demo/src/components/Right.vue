<template>
  <div class="right-container">
    <h3>Right 组件</h3>

    <MyCount :init="5"> </MyCount>
    
  </div>
</template>

<script>
export default { }
</script>

<style lang="less" scoped>
.right-container {
    padding: 0 20px 20px;
    background-color: blue;
    min-height: 250px;
    flex: 1;
  }
  h3{
    color:yellow;
  }
  /deep/ h5 {
    color: green;
  }
</style>








