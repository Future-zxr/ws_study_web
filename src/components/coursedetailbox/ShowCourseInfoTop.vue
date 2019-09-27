<template>
  <div style="background:#889FC7;width: 100%">
    <div class="base-info-css">
      <el-row :gutter="20">
        <el-col :span="16" class="course-list-name">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }"><span>课程</span></el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/' }"><span>前端开发</span></el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/' }"><span>HTML/CSS</span></el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/' }"><span>初识HTML</span></el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
        <el-col :span="8" class="course-list-name">
          <i class="el-icon-star-off">收藏</i>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="5.5" style="height: 190px">
          <img src="http://pxebavmp1.bkt.clouddn.com/images/course84.png" alt="" style="width: 270px;height: 190px">
        </el-col>
        <el-col :span="12" style="height: 190px;color: white">
          <el-row>
            <el-col>
              <h1 style="padding: 10px 0 10px 10px">Python</h1>
            </el-col>
          </el-row>
          <el-row :gutter="20" style="font-size: 18px;padding: 20px 0">
            <el-col :span="11" style="padding: 0 0 0 20px"><span>难度:</span></el-col>
            <el-col :span="11"><span>学习时长:</span></el-col>
          </el-row>
          <el-row :gutter="20" style="font-size: 18px;padding: 20px 0">
            <el-col :span="11" style="padding: 0 0 0 20px"><span>学习人数:</span></el-col>
            <el-col :span="11"><span>收藏量:</span></el-col>
          </el-row>
        </el-col>
        <el-col :span="6" style="height: 190px;">
          <el-button type="info" round class="btn-css">开始学习</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ShowCourseInfoTop",
      props:['data_info']
    }
</script>

<style scoped>
  h1{
    margin: 0;
    padding: 0;
  }
.base-info-css{
  width: 1250px;
  height: 250px;
  margin: 0 344px;
}
  .course-list-name{
    height: 60px;
    padding: 15px 0px ;
    box-sizing: border-box;
  }
  .course-list-name span{
    font-size: 16px;
  }
  .el-icon-star-off:hover{
    color: blue;
  }
  .btn-css{
    width: 100%;
    height:40px;
    background: #6ccbd8;
    margin-top: 75px;
    padding: 5px;
    font-size: 18px
  }
</style>
