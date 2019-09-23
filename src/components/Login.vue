<template>
    <div id="login">
      <h1>欢迎登录</h1>
      <button @click="onLogin">登录</button>
    </div>
</template>

<script>
  import Bus from '../Bus'
    export default {
        name: "Login",
      methods:{
          onLogin:function () {
            alert('登录');
            Bus.$emit('login_state_change',true);
            window.localStorage.setItem('islogin',true);
            this.$router.push('/')
          }
      }
    }
</script>

<style scoped>
  div,h1{
    margin: 0;
    padding: 0;
    border: none;
  }
  div{
    width: 100%;
    height: 665px;
    background-color: mediumpurple;
    background-image: url("http://pxebavmp1.bkt.clouddn.com/images/login_background.jpg");
    background-repeat: no-repeat;
  }
</style>
