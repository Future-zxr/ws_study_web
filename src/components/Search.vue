<template>
    <div id="search" class="search">
      <div class="top">
        <input type="text" :value="$route.query.search_text">
        <input type="button" value="search">
      </div>
      <button-sort-box></button-sort-box>
      <course-list-box :parameters="parameters" :key="$route.query.search_text"></course-list-box>
      <button-page-box></button-page-box>
    </div>
</template>

<script>
    import ButtonSortBox from "./coursebox/ButtonSortBox";
    import CourseListBox from "./coursebox/CourseListBox";
    import ButtonPageBox from "./coursebox/ButtonPageBox";
    export default {
      name: "Search",
      data(){
        return{
          parameters:{
            "difficulty_name":'',
            "direction_name":"",
            "classify_name":"",
            "page_index":1,
            "page_items":30,
            "sort_flag":0,
            "search_text":this.$route.query.search_text
          },
          input_data:''
        }
      },
      components: {ButtonPageBox, CourseListBox, ButtonSortBox}
    }
</script>

<style scoped>
  div{
    margin: 0;
    padding: 0;
    border: none;
  }
  .search{
    width: 100%;
    background-color: yellow;
  }
  .search .top{
    width: 100%;
    height: 140px;
    background-color: rgba(207,207,207,0.57);
  }
</style>
