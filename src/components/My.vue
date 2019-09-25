<template>
  <div class="container">
    <el-container class="content">
      <el-aside width="180px" class="nav_list">
        <personal-nav></personal-nav>
      </el-aside>
    </el-container>
    <div class="sort">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Personal_nav from './personalbox/Personalnavleft'
    export default {
      name: "My",
      created:{},
      watch:{
        '$route'(to,from){
          if(to.name==='my' ||to.name==='profile'){
            this.$router.push('/my/profile')
          }
        }
      },
      components:{"personal-nav":Personal_nav}
    }
</script>

<style scoped>
    .container{
      width: 1200px;
      height: 520px;
      display: flex;
      margin: 20px auto;
    }
    .container .sort{
      width: 1020px;
      height: 520px;
    }
    .container .content{
      width: 180px;
      height: 450px;
      box-shadow: 0 0 1px;
    }
  .content .nav_list{
      height: 450px;

  }

</style>
