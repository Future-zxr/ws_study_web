<template>
    <div id="course_unique" class="course_unique">
      <div class="title">
        <h2>精品课程</h2>
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
        name: "CourseUnique",
      data(){
        return{
          parameters: {
            "difficulty_name":'',
            "direction_name":"",
            "classify_name":"",
            "page_index":1,
            "page_items":30,
            "sort_flag":3,
            "search_text":''
          }
        }
      },
      components: {ButtonPageBox, CourseListBox, ButtonSortBox, ButtonTypeBox},
    }
</script>

<style scoped>
  div,h2{
    margin: 0;
    padding: 0;
    border: none;
  }
  .course_unique{
    width: 100%;
    background-color: pink;
    padding-top: 20px;
  }
  .course_unique .title{
    width: 100%;
    background-color: rgba(136, 84, 255, 0.55);
    height: 95px;
  }
  .course_unique .title h2{
    width: 1215px;
    margin: 0 auto;
  }
</style>
