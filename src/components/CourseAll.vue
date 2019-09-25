<template>
    <div id="course_all" class="course_all">
      <div class="title">
        <h2>全部课程</h2>
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
    import ButtonPageBox from "./coursebox/ButtonPageBox";
    import CourseListBox from "./coursebox/CourseListBox";
    export default {
        name: "CourseAll",
      data(){
        return{
          parameters: {
            "difficulty_name":'',
            "direction_name":"",
            "classify_name":"",
            "page_index":1,
            "page_items":30,
            "sort_flag":0,
            "search_text":''
          }
        }
      },

      components: {CourseListBox, ButtonPageBox, ButtonSortBox, ButtonTypeBox},
    }
</script>

<style scoped>
  div,h2{
    margin: 0;
    padding: 0;
    border: none;
  }
  .course_all{
    width: 100%;
    background-color: #bbc8ea;
    padding-top: 20px;
  }
  .course_all .title{
    width: 100%;
    background-color: #b8ffc4;
    height: 95px;
  }
  .course_all .title h2{
    width: 1215px;
    margin: 0 auto;
  }
</style>
