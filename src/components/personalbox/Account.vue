<template>
  <div class="contain">
    <div class="personal_top">
      <h3 class="title">账号设置</h3>
    </div>
    <div class="split"></div>
    <div class="change"></div>
    <div class="split"></div>
    <div class="change_email"></div>
    <div class="split"></div>
    <div class="connection"></div>
  </div>
</template>

<script>
  export default {
    name: "total"
  }
</script>

<style scoped>
  .split{
    width: 96%;
    height: 1px;
    margin: auto;
    background: gray;
  }
  .contain{
    width: 1020px;
    height: 520px;
    overflow: hidden;
    background: #82ff60;
  }
  .contain .personal_top{
    height: 100px;
    line-height: 50px;
    overflow: hidden;
  }
  .contain .personal_top .title{
    padding-left: 20px;
  }
</style>
