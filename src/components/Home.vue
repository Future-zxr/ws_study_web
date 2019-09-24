<template>
    <div id="home" class="home">
      <rotation-chart-box></rotation-chart-box>
      <ul>
        <li v-for="tag in tags"><home-course-list-box :flag="tag"></home-course-list-box></li>
      </ul>
      <home-teacher-list-box></home-teacher-list-box>
      <nav-fixed></nav-fixed>
    </div>
</template>

<script>
    import RotationChartBox from "./homebox/RotationChartBox";
    import HomeCourseListBox from "./homebox/HomeCourseListBox";
    import HomeTeacherListBox from "./homebox/HomeTeacherListBox";
    import NavFixed from "./global/NavFixed";
    export default {
        name: "Home",
      data(){
          return{
            tags:[1,2,3,4,5]
          }
      },
      components: {NavFixed, HomeTeacherListBox, HomeCourseListBox, RotationChartBox}
    }
</script>

<style scoped>
  div,ul,li{
    margin: 0;
    padding: 0;
    border: none;
  }
  ul{
    list-style: none;
    margin-bottom: 30px;
  }
  .home{
    width: 100%;
    background-color: white;
    padding: 30px 0;
  }
  .home li{
    margin-top: 30px;
  }
</style>
