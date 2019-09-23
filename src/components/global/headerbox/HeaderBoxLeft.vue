<template>
    <div id="header_box_left" class="header_box_left">
      <div class="div-logo" style="width: 200px;height: 30px;background-color: gray;margin: 5px 0;" v-on:click="$router.push({path:'/'})"></div>
      <div class="nav" style="width: 400px;height: 30px;margin: 5px 0;">
        <ul>
          <li v-for="tag in tags"><router-link :to="'/'+tag.link" style="text-decoration: none;color: white;line-height: 30px">{{tag.name}}</router-link></li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderBoxLeft",
      data(){
          return{
            tags:[
              {name:'全部课程',link:'course_all'},
              {name:'精品课程',link:'course_unique'},
              {name:'免费课程',link:'course_free'},
              {name:'笔记专栏',link:'note'},
            ]
          }
      }
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
    display: flex;
    justify-content: space-between;
  }
  .header_box_left{
    width: 608px;
    height: 40px;
    display: flex;
    justify-content: space-between;
  }

</style>
