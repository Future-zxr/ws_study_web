<template>
    <div class="select-list-nav">
        <div class="nav-inner">
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
          </el-tabs>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ShowInfoMain",
      data(){
          return{
            activeName:'first'
          }
      },
      methods:{
        handleClick(tab, event) {
          console.log(tab, event);
        }
      }
    }
</script>

<style scoped>
.select-list-nav{
  width: 100%;
  height: 50px;
  background: white;
}
  .nav-inner{
    width: 1250px;
    height: 50px;
    margin:  0 344px;
    background: #766ee1;
  }
</style>
