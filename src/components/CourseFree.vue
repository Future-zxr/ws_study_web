<template>
    <div id="course_free" class="course_free">
      <div class="title">
        <h2>免费课程</h2>
      </div>
      <button-type-box></button-type-box>
      <button-sort-box></button-sort-box>
      <course-list-box :parameters="parameters"></course-list-box>
      <button-page-box></button-page-box>
    </div>
</template>

<script>
    import ButtonTypeBox from "./coursebox/ButtonTypeBox";
    import ButtonSortBox from "./coursebox/ButtonSortBox";
    import CourseListBox from "./coursebox/CourseListBox";
    import ButtonPageBox from "./coursebox/ButtonPageBox";
    export default {
        name: "CourseFree",
      data(){
        return{
          parameters: {
            "difficulty_name":'',
            "direction_name":"",
            "classify_name":"",
            "page_index":1,
            "page_items":30,
            "sort_flag":4,
            "search_text":''
          }
        }
      },
      components: {ButtonPageBox, CourseListBox, ButtonSortBox, ButtonTypeBox}
    }
</script>

<style scoped>
  div,h2{
    margin: 0;
    padding: 0;
    border: none;
  }
  .course_free{
    width: 100%;
    background-color: #82ff60;
    padding-top: 20px;
  }
  .course_free .title{
    width: 100%;
    background-color: rgb(255, 254, 49);
    height: 95px;
  }
  .course_free .title h2{
    width: 1215px;
    margin: 0 auto;
  }
</style>
