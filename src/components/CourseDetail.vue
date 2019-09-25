<template>
    <div id="course_detail" class="course_detail">
<!--      这是{{course_id}}课程-->
      这是{{$route.query.course_id}}课程
    </div>
</template>

<script>
    export default {
        name: "CourseDetail",
      data(){
          return{
            course_id:228
          }
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
