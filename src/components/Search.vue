<template>
    <div id="search" class="search">
      <div class="top">
          <el-input placeholder="请输入内容" v-model="search_text" class="input">
            <el-button slot="append" icon="el-icon-search"  @click="onSearchCourse"></el-button>
          </el-input>
        </div>
      <button-sort-box></button-sort-box>
      <course-list-box :parameters="parameters" :key="search_key"></course-list-box>
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
          search_text:this.$route.query.search_text,
          search_key:this.$route.query.search_text,
          parameters:{
            "difficulty_name":'',
            "direction_name":"",
            "classify_name":"",
            "page_index":1,
            "page_items":30,
            "sort_flag":0,
            "search_text":this.search_text
          },
        }
      },
      components: {ButtonPageBox, CourseListBox, ButtonSortBox},
      methods:{
        onSearchCourse:function () {
          this.parameters.search_text = this.search_text;
          this.search_key = this.search_text;
          this.$router.push({ path: 'search', query: { search_text: this.parameters.search_text} })
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
  .search{
    width: 100%;
    background-color: yellow;
  }
  .search .top{
    width: 100%;
    height: 140px;
    background-color: rgba(207,207,207,0.57);
  }
  .input{
    width: 1215px;
    margin: 50px 319px 0 344px;
    /*box-sizing: border-box;*/
    border-radius: 10px;
  }
</style>
