<template>
  <div class="course_list_box">
      <div class="dis_article_c" v-for="condition in conditions" :key="condition.course_id" @click="ToCourseDetail(condition.course_id)">
        <div class="dis_article_c_inner">
          <img :src="condition.course_img" alt="" style="z-index: 1000">
          <h3>{{condition.course_name}}</h3>
          <p>{{condition.difficulty}}</p>
          <p class="p_intro">{{condition.introduce}}</p>
          <p class="integral">{{condition.course_price}}</p>
        </div>
      </div>
  </div>
</template>

<script>
    export default {
      name: "CourseListBox",
      props:['parameters'],
      data() {
        return {
          conditions: []
        }
      },
      methods:{
        ToCourseDetail:function (id) {
          this.$router.push({ path: 'course_detail', query: { course_id: id} })
        },
        get_course_by_condition:function (data,parameters) {
          let url = this.Global.server_url + '/course/get_course/';
          // get
          this.axios.get(url,{
            params:{
              "difficulty_name":parameters.difficulty_name,
              "direction_name":parameters.direction_name,
              "classify_name":parameters.classify_name,
              "page_index":parameters.page_index,
              "page_items":parameters.page_items,
              "sort_flag":parameters.sort_flag,
            }
          })
            .then(function (response) {
              // console.log(response.data);
              for(let i=0;i<30;i++){
                if (response.data[i].integral == 0){
                  response.data[i].integral='免费'
                }
                else {
                  response.data[i].integral=response.data[i].integral+'积分'
                }
                data.push(
                  {"course_img":"http://pxebavmp1.bkt.clouddn.com/images/course"+response.data[i].course_icon,"course_name":response.data[i].name,
                    "course_price":response.data[i].integral,"course_id":response.data[i].id,"difficulty":response.data[i].difficulty__name,
                    "introduce":response.data[i].introduce}
                )
              }
            })
            .catch(function (error) {
              console.log(error);
            });
        },

        get_course_by_search_text:function (data,parameters) {
          let url = this.Global.server_url + '/course/search_course/';
          // get
          this.axios.get(url,{
            params:{
              "search_text":parameters.search_text,
            }
          })
            .then(function (response) {
              // console.log(response.data);
              for(let i=0;i<30;i++){
                if (response.data[i].integral == 0){
                  response.data[i].integral='免费'
                }
                else {
                  response.data[i].integral=response.data[i].integral+'积分'
                }
                data.push(
                  {"course_img":"http://pxebavmp1.bkt.clouddn.com/images/course"+response.data[i].course_icon,"course_name":response.data[i].name,
                    "course_price":response.data[i].integral,"course_id":response.data[i].id,"difficulty":response.data[i].difficulty__name,
                    "introduce":response.data[i].introduce}
                )
              }
            })
            .catch(function (error) {
              console.log(error);
            });
        },
      },
      created: function () {
        if (this.parameters.search_text) {
          this.get_course_by_search_text(this.conditions,this.parameters)
        }else {
          this.get_course_by_condition(this.conditions,this.parameters)
        }
      },
    }
</script>

<style scoped>
  body,html,h3 ,p{
    margin: 0;
    padding: 0;
  }
  .course_list_box{
    width: 1215px;
    /*height: 1920px;*/
    height: 100%;
    margin: 0 auto;
    background: white;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  .dis_article_c{
    height: 300px;
    width: 243px;
    margin-bottom: 20px;
    transition: box-shadow 0.3s;
    padding: 10px 10px;
    box-sizing: border-box;
  }
  .dis_article_c:hover{
    cursor: pointer;
    box-shadow: 0 0 10px gray;
  }
  .dis_article_c_inner{
    height: 280px;
    width: 223px;
  }
  .dis_article_c_inner img{
    height: 135px;
    width: 223px;
  }
  .dis_article_c_inner h3{
    margin: 0;
    font-size: 18px;
    height: 56px;
  }
  .dis_article_c_inner p{
    color: gray;
  }
  .dis_article_c_inner .p_intro{
    height: 40px;
    /* 实现p标签多行超界省略号代替 */
    display: -webkit-box;
    -webkit-box-orient: vertical; /* 子元素显示方式:vertical-垂直 */
    overflow: hidden; /* 多余的隐藏 */
    -webkit-line-clamp:2; /* 有隐藏的则用省略号代替 */
  }
  .dis_article_c_inner .integral{
    color: #000;
  }
</style>
