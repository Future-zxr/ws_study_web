<template>
  <div class="header_box">
    <el-row class="el-row-demo" type="flex" justify="space-between">
      <el-col :span="12">
        <header-box-left></header-box-left>
      </el-col>
      <el-col :span="8">
        <header-box-right></header-box-right>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    import HeaderBoxLeft from "./headerbox/HeaderBoxLeft";
    import HeaderBoxRight from "./headerbox/HeaderBoxRight";
    export default {
        name: "HeaderBox",
      components: {HeaderBoxRight, HeaderBoxLeft}
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
    border: none;
  }
  .header_box{
    width: 100%;
    margin: 0 auto;
    background-color: black;
  }
  .el-row-demo{
    width: 1215px;
    margin: 0 auto;
  }

</style>
