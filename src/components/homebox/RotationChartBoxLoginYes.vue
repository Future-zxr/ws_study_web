<template>
  <el-container>
    <el-header class="el-header" style="height: 100px">
      <router-link class="rcb_router_link" to="/course_free" style="">免费精品课程</router-link>
    </el-header>
    <el-main style="height: 180px" class="el-main">
      <a href="#"><img src="http://pxebavmp1.bkt.clouddn.com/images/default_user_icon.png" alt="你好啊"></a>
    </el-main>
    <el-footer style="height: 120px;border-radius: 0 0 10px 0">
      <el-button type="primary" @click="onToLogin" style="background-color: #87cefa;width: 150px">我的课程</el-button>
    </el-footer>
  </el-container>
</template>

<script>
    export default {
        name: "RotationChartBoxLoginYes",
        methods:{
          onToLogin:function () {
            // this.$router.push({path:'/login'})
          }
        }
    }
</script>

<style scoped>
  .el-header,.el-main,.el-footer{
    margin: 0;
    padding: 0;
    text-align: center;
  }
  .el-header{
    border-radius: 0 10px 0 0;
    padding-top: 65px;
  }
  .el-main{
    padding-top: 40px;
  }

  .rcb_router_link{
    font-size: 18px;
    color: white;
    text-decoration: none;
  }
</style>
