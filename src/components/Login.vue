<template>
    <div class="panel">
      <div class="center">
        <user-login v-if="1==i"></user-login>
        <user-register v-if="2==i"></user-register>
        <user-retrieve-password v-if="3==i"></user-retrieve-password>
        <!--         选项 -->
        <div class="show_select">
          <span><a href="javascript:void 0" class="btn_style"@click="i=1" >登录</a></span>
          <span style="color: gainsboro">|</span>
          <span><a href="javascript:void 0" class="btn_style"@click="i=2">去注册</a></span>
          <span style="color: gainsboro">|</span>
          <span><a href="javascript:void 0" class="btn_style"@click="i=3" >忘记密码</a></span>
        </div>
      </div>
    </div>
</template>

<script>
  import UserLogin from './loginbox/UserLogin'
  import UserRegister from './loginbox/UserRegister'
  import UserRetrievePassword from './loginbox/UserRetrievePassword'
    export default {
        name: "Login",
      data(){
          return{
            i:1,
          }
      },
      methods:{
      },
      components:{
          "user-login":UserLogin,
          "user-register":UserRegister,
          "user-retrieve-password":UserRetrievePassword }
    }

</script>

<style scoped>
  div,h1{
    margin: 0;
    padding: 0;
    border: none;
  }
  .panel{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-image: url("http://pxebavmp1.bkt.clouddn.com/images/login_background.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
  .panel .center{
    width: 400px;
    height: 400px;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -250px;
    margin-left: -200px;
    background: rgba(78, 78, 80, 0.29);
  }
  .show_select{
    padding: 0 0 0 220px;
    width: 400px;
    height: 20px;
    box-sizing: border-box;
  }
  .btn_style{
    font-size: 14px;
    color: whitesmoke;
  }
  .btn_style:hover{
    color: #ff4730;
  }
  /***************************/
  /***************************/
</style>

