<template>
    <div id="header_box_right" class="header_box_right">
      <div class="search">
        <input class="search_text" type="text" v-model="content">
        <button class="search_btn"><router-link class="router_link" :to="{ path: 'search', query: { search_text:content} }">搜索</router-link></button>
      </div>
      <header-box-right-login-yes v-if='login_state'></header-box-right-login-yes>
      <header-box-right-login-no v-else></header-box-right-login-no>
    </div>
</template>

<script>
    import Bus from '../../../Bus'
    import HeaderBoxRightLoginNo from "./HeaderBoxRightLoginNo";
    import HeaderBoxRightLoginYes from "./HeaderBoxRightLoginYes";
    export default {
        name: "HeaderBoxRightNo",
      data(){
        return{
          login_state:false,
          content:''
        }
      },
      components: {HeaderBoxRightLoginYes, HeaderBoxRightLoginNo},
      mounted:function() {
          if (window.localStorage.getItem('islogin')){
            this.login_state=true;
          }
          Bus.$on('login_state_change',(data)=>{
            this.login_state=data;

          })
      },
      watch:{
        $route:function () {
            if (this.content) this.content=''
        }
      }
    }
</script>

<style scoped>
  div,span,input,button{
    margin: 0;
    padding: 0;
    border: none;
  }
  .router_link{
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: white;
    line-height: 30px
  }
  .header_box_right{
    width: 425px;
    height: 40px;
    padding: 5px 0;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
  }
  .header_box_right .search{
    width: 300px;
    height: 30px;
    display: flex;
    justify-content: flex-start;
  }
  .header_box_right .search .search_text{
    width: 250px;
    height: 30px;
    outline: none;
    box-sizing: border-box;
  }
  .header_box_right .search .search_btn{
    width: 50px;
    height: 30px;
  }


</style>
