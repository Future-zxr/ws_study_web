<template>
    <div id="button_type_box" class="button_type_box">
      <div class="container">

        <!-- 方向 -->
        <div class="direction">
          <div class="title"><span>方向：</span></div>
          <div class="content">
            <ul>
              <li v-for="ditem in direction_list"><a href="javascript: void 0" :class="{selected:dir_index===ditem.id}" @click="onClickDirection(ditem.id,ditem.name)">{{ditem.name}}</a></li>
            </ul>
          </div>
        </div>
        <!-- 方向END -->
        <!-- 分类 -->
        <div class="classify">
          <div class="title"><span>分类：</span></div>
          <div class="content">
            <ul>
              <li v-for="citem in classify_list"><a href="javascript:void 0" :class="{selected:cla_index===citem.id}" @click="onClickClassify(citem.id,citem.name)">{{citem.name}}</a></li>
            </ul>
          </div>
        </div>
        <!-- 分类END -->
        <!-- 难度 -->
        <div class="difficulty">
          <div class="title"><span>难度：</span></div>
          <div class="content">
            <ul>
              <li v-for="difitem in difficulty_list"><a href="javascript:void 0" :class="{selected:dif_index===difitem.id}" @click="dif_index=difitem.id">{{difitem.name}}</a></li>
            </ul>
          </div>
        </div>
        <!-- 难度END -->


      </div>
    </div>
</template>

<script>
    export default {
        name: "ButtonTypeBox",
      data(){
          return{
            dir_index:0,
            cla_index:0,
            dif_index:0,
            direction_list:[
              // {id:14,name:'计算机基础'}
              {id:0,name:'全部'}
            ],
            classify_list:[
              // {id:51,name:"HTML/CSS",direction__name:11}
              {id:0,name:'全部'}
            ],
            difficulty_list:[
              // {id:1,name:"入门"},
              {id:0,name:'全部'}
            ]
          }
      },
      created:function(){
        this.get_direction();
        this.get_classify();
        this.get_difficulty();
      },
      methods:{

        /* 获取方向 */
        get_direction:function(){
          let dir_url = this.Global.server_url + '/course/get_direction/';
          this.GlobalFunc.func_axios(dir_url,'GET', null,
            res=>{ this.show_direction(this.direction_list, res) }
          )
        },
        /* 获取方向END */
        /* 显示方向 */
        show_direction:function(to_data, res){
          for (let item in res) {
            to_data.push(res[item])
          }
        },
        /* 显示方向 END */

        /* 获取分类 */
        get_classify:function(){
          let cla_url = this.Global.server_url + '/course/get_classify/';
          this.GlobalFunc.func_axios(cla_url,'GET', {"direction_name":""},
            res=> { this.show_classify(this.classify_list, res)}
          );
        },
        /* 获取分类 END */
        /* 显示分类 */
        show_classify:function(to_data, res){
          to_data.splice(0);
          for (let item in res) {
            to_data.push(res[item])
          }
        },
        /* 显示分类 END */

        /* 获取难度 */
        get_difficulty:function(){
          let dif_url = this.Global.server_url + '/course/get_difficulty/';
          this.GlobalFunc.func_axios(dif_url, 'GET', null,
            res=>{ this.show_difficulty(this.difficulty_list, res)}
          )
        },
        /* 获取难度 END */
        /* 显示难度 */
        show_difficulty:function(to_data, res){
          for (let item in res) {
            to_data.push(res[item])
          }
        },
        /* 显示难度 END */

        /* 点击方向触发事件 */
        onClickDirection:function (direction_id,direction_name) {
          this.dir_index=direction_id;
          this.$emit('click_direction',{"direction_id":direction_id,"direction_name":direction_name});
        },
        /* 点击方向触发事件 END */
        /* 点击分类触发事件 */
        onClickClassify:function (classify_id,classify_name) {
          this.cla_index=classify_id;
          this.$emit('click_classify',{"classify_id":classify_id,"classify_name":classify_name});
        },
       /* 点击分类触发事件 END*/


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
  }
  .button_type_box{
    width: 100%;
    height: 310px;
    background-color: white;
  }
  .button_type_box .container{
    width: 1215px;
    height: 310px;
    margin: 0 auto;
    background-color: white;
  }
  .button_type_box .container .direction{
    border-top: 1px solid #c7c7c7;
    line-height: 60px;
    display: flex;
    justify-content: flex-start;
  }
  .button_type_box .container .classify{
    max-height: 180px;
    border-top: 1px solid #e4e4e4;
    line-height: 60px;
    display: flex;
    justify-content: flex-start;
    /*overflow: hidden;*/
    overflow-y: scroll;
  }
  .button_type_box .container .classify .content ul{
    display: block;
  }
  .button_type_box .container .classify .content ul li{
    display: inline-block;
  }
  .button_type_box .container .difficulty{
    border-top: 1px solid #e4e4e4;
    line-height: 60px;
    display: flex;
    justify-content: flex-start;
  }
  .button_type_box .container .title{
    width: 50px;
  }
  .button_type_box .container .title span{
    font-size: 16px;
    font-weight: bolder;
  }
  .button_type_box .container .content{
    width: 1165px;
    padding-left: 20px;
  }
  .button_type_box .container .content ul{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  .button_type_box .container .content ul li{
    margin-right: 20px;
  }
  .button_type_box .container ul li a{
    font-size: 16px;
    color: black;
    padding: 5px 5px;
    border-radius: 2px;
    text-decoration: none;
    transition: color 0.5s;
  }
  .button_type_box .container .selected{
    background: #7ff0ff;
  }
  .button_type_box .container a:not([class="selected"]):hover{
    color: #7ff0ff;
  }
</style>
