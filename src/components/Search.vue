<template>
    <div id="search" class="search">
      <div class="top">
        搜索框
      </div>
      <button-sort-box></button-sort-box>
      <course-list-box></course-list-box>
      <button-page-box></button-page-box>
    </div>
</template>

<script>
    import ButtonSortBox from "./coursebox/ButtonSortBox";
    import CourseListBox from "./coursebox/CourseListBox";
    import ButtonPageBox from "./coursebox/ButtonPageBox";
    export default {
        name: "Search",
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
