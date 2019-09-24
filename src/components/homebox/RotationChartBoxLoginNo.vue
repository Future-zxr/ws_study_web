<template>
    <el-container>
      <el-header class="el-header1" style="height: 100px">
        <router-link class="rcb_router_link" to="/course_free" style="">免费精品课程</router-link>
      </el-header>
      <el-main style="height: 190px">
        <el-header class="el-header2" style="height: 130px;">
          <a href="#"><img src="http://pxebavmp1.bkt.clouddn.com/images/default_user_icon.png" alt="你好啊"></a>
        </el-header>
        <el-main style="height: 60px;">
          <el-button type="primary" @click="onToLogin" style="background-color: #87cefa;width: 150px">登录</el-button>
        </el-main>
      </el-main>
      <el-footer style="height: 110px;border-radius: 0 0 10px 0">
        <router-link class="rcb_router_link" to="/login" style="">没有账号，去注册</router-link>
      </el-footer>
    </el-container>
</template>

<script>
    export default {
        name: "RotationChartBoxLoginNo",
      methods:{
        onToLogin:function () {
          this.$router.push({path:'/login'})
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
  .el-header1{
    border-radius: 0 10px 0 0;
    padding-top: 65px;
  }
  .el-header2{
    padding-top: 20px;
  }

  .rcb_router_link{
    font-size: 18px;
    color: white;
    text-decoration: none;
  }
</style>
