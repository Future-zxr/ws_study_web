<template>
    <div id="course_detail" class="course_detail">
<!--      这是{{$route.query.course_id}}课程-->
      <base-info></base-info>
      <center-list></center-list>
    </div>
</template>

<script>
  import ShowCourseInfoTop from './coursedetailbox/ShowCourseInfoTop'
  import ShowInfoMain from './coursedetailbox/ShowInfoMain'
    export default {
        name: "CourseDetail",
      data(){
          return{
            course_id:this.$route.query.course_id,
          }
      },
      components:{
          "base-info":ShowCourseInfoTop,
          "center-list":ShowInfoMain,
      }
    }
</script>

<style scoped>
  div{
    margin: 0;
    padding: 0;
    border: none;
  }
  .course_detail{
    width: 100%;
    height: 500px;
    background-color: cornflowerblue;
  }
</style>
