<template>
  <div class="course_list_box">
      <div class="dis_article_c" v-for="cou_item in course_list" :key="cou_item.course_id" @click="ToCourseDetail(cou_item.course_id)">
        <div class="dis_article_c_inner">
          <img :src="cou_item.course_img" alt="" style="z-index: 1000">
          <h3>{{cou_item.course_name}}</h3>
          <p>{{cou_item.difficulty}}</p>
          <p class="p_intro">{{cou_item.introduce}}</p>
          <p class="integral">{{cou_item.course_price}}</p>
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
          course_list: []
        }
      },
      methods:{

        /* 获取课程 根据条件 */
        get_course_by_condition:function () {
          let url = this.Global.server_url + '/course/get_course/';
          this.GlobalFunc.func_axios(url,'GET', this.parameters,
            res=>{ this.show_course(this.course_list,res) }
          )
        },
        /* 获取课程 根据条件 END */

        /* 获取课程 根据搜索条件 */
        get_course_by_search_text:function () {
          let url = this.Global.server_url + '/course/search_course/';
          this.GlobalFunc.func_axios(url,'GET', { "search_text":this.parameters.search_text},
            res=>{ this.show_course(this.course_list,res) }
          )
        },
        /* 获取课程 根据搜索条件  END */

        /* 显示课程 */
        show_course:function(to_data, res){
          console.log(res);
          for(let i=0;i<30;i++){
            if(res[i].integral==0)
              res[i].integral='免费';
            else
              res[i].integral = res[i].integral+'积分';
            // (res[i].integral===0)?(res[i].integral='免费'):(res[i].integral=res[i].integral+'积分');
            to_data.push(
              {"course_img":"http://pxebavmp1.bkt.clouddn.com/images/course"+res[i].course_icon,"course_name":res[i].name,
                "course_price":res[i].integral,"course_id":res[i].id,"difficulty":res[i].difficulty__name,
                "introduce":res[i].introduce}
            )
          }
        },
        /* 显示课程 END */

        /* 跳转到课程详情 */
        ToCourseDetail:function (id) {
          this.$router.push({ path: 'course_detail', query: { course_id: id} })
        },
        /* 跳转到课程详情 END */


      },
      created: function () {
        if (this.parameters.search_text) {
          this.get_course_by_search_text()
        }else {
          this.get_course_by_condition()
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
