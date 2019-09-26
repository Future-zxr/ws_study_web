<template>
    <div id="button_page_box" class="button_page_box">
      <!-- total一共多少个，page-size 每页显示多少个-->
      <el-pagination class="el-pagination" background layout="prev, pager, next" :total="1000" :page-size="50">
      </el-pagination>
    </div>
</template>

<script>
    export default {
        name: "ButtonPageBox"
    }
</script>

<style scoped>
  .button_page_box{
    width: 550px;
    margin: 0 auto;
    height: 120px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .el-pagination{
    width: 400px;
    margin: 0 auto;
  }
</style>
