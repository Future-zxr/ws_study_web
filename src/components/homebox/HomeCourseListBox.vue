<template>
    <div id="home_course_list_box" class="home_course_list_box">
      <h1>{{flag}}</h1>
    </div>
</template>

<script>
    export default {
        name: "HomeCourseListBox",
      props:['flag',]
    }
</script>

<style scoped>
  div,h1{
    margin: 0;
    padding: 0;
    border: none;
  }
  .home_course_list_box{
    width: 1215px;
    margin: 0 auto;
    height: 500px;
    background-color: pink;
  }
</style>
