<template>

  <el-row class="rotation_chart_box">
    <!-- 左侧导航 -->
    <el-col :span="4" style="background-color: #c49aff;height: 400px;">

    </el-col>
    <!-- 轮播图 -->
    <el-col :span="16" style="height: 400px">
      <el-carousel trigger="click" height="400px">.
        <el-carousel-item v-for="item in img_list" :key="item.img_id">
          <a :href="item.link">
            <el-image style="width:810px;height: 400px" :src="Global.img_url + item.img_url" fit="cover" ></el-image>
          </a>
        </el-carousel-item>
      </el-carousel>
    </el-col>
    <!-- 右侧 -->
    <el-col :span="4" style="height: 400px">
      <rotation-chart-box-login-yes v-if="login_state"></rotation-chart-box-login-yes>
      <rotation-chart-box-login-no v-else></rotation-chart-box-login-no>
    </el-col>
  </el-row>

</template>

<script>
    import Bus from '../../Bus'
    import RotationChartBoxLoginYes from "./RotationChartBoxLoginYes";
    import RotationChartBoxLoginNo from "./RotationChartBoxLoginNo";
    export default {
        name: "RotationChartBox",
      components: {RotationChartBoxLoginNo, RotationChartBoxLoginYes},
      data(){
          return{
            img_list:[
              { img_id:1,img_url:"/images/hoom_top1.png", link:"https://www.baidu.com/"},
              { img_id:2,img_url:"/images/hoom_top2.png", link:"https://www.taobao.com/"},
              { img_id:3,img_url:"/images/hoom_top3.png", link:"https://www.jd.com/"},
              { img_id:4,img_url:"/images/hoom_top4.png", link:"https://www.163.com/"}
            ],
            login_state:true
          }
        },
      mounted:function() {
        if (window.localStorage.getItem('islogin')){
          this.login_state=true;
        }
        Bus.$on('login_state_change',(data)=>{
          this.login_state=data;
        })
      }
    }

</script>

<style scoped>
  div{
    margin: 0;
    padding: 0;
    border: none;
  }
  .rotation_chart_box{
    width: 1215px;
    margin: 0 auto;
    height: 400px;
    background-color: #2E323E;
    border-radius: 10px;
  }


</style>
