<template>
  <div class="contain">
      <div class="personal_top">
        <h3 class="title">个人资料</h3>
      </div>
    <div class="split"></div>
    <div class="bottom">
        <div class="header">

        </div>
        <div class="bottom_right"></div>
    </div>
  </div>

</template>
<script>
  export default {
    data() {
      return {
       list:[{link_href:""}]
      };
    },
    methods: {}
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
    background: #854cff;
  }
  .contain .personal_top .title{
    padding-left: 20px;
  }
  .contain .bottom{
    width: 980px;
    height:335px ;
    background: deeppink;
    margin: auto;
    display: flex;
  }
  .contain .bottom .header{
    width: 100px;
    height: 144px;
    background: #d4d4d4;
  }
  .contain .bottom .bottom_right{
    width: 840px;
    height: 335px;
    margin-left: 40px;
    background: #49d443;
  }
</style>
