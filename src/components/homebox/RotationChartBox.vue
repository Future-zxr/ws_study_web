<template>

  <el-row class="rotation_chart_box">
    <!-- 左侧导航 -->
    <el-col :span="4" style="height: 400px;">

      <ul class="ul_1">
        <li class="li_1" v-for="item in rcb_courses" @mouseover="onMouseOver(item.index)" @mouseleave="onMouseLeave()">
          <div>{{item.title}}</div>
          <div class="hidden_div" v-if="rcb_left_index===item.index">
            <div style="color: #5dfff2;text-align: left;font-weight: bolder">{{item.contain.c_title}}</div>
              <ul class="ul_2">
                <li class="li_2" v-for="j in item.contain.c_classify">
                  <router-link  class="router-link" :to="{ path: 'course_all', query: { direction_name:item.contain.c_title,classify_name:j.name} }">{{j.name}}</router-link>
                </li>
              </ul>
          </div>
        </li>
      </ul>



    </el-col>
    <!-- 左侧导航 END -->
    <!-- 轮播图 -->
    <el-col :span="16" style="height: 400px">
      <el-carousel trigger="click" height="400px">.
        <el-carousel-item v-for="item in img_list" :key="item.img_id">
          <a :href="item.link">
            <el-image style="width:810px;height: 400px" :src="Global.img_url + item.img_url" fit="cover" ></el-image>
          </a>
        </el-carousel-item>
      </el-carousel>
    </el-col>
    <!-- 右侧 -->
    <el-col :span="4" style="height: 400px">
      <rotation-chart-box-login-yes v-if="login_state"></rotation-chart-box-login-yes>
      <rotation-chart-box-login-no v-else></rotation-chart-box-login-no>
    </el-col>
  </el-row>

</template>

<script>
    import Bus from '../../Bus'
    import RotationChartBoxLoginYes from "./RotationChartBoxLoginYes";
    import RotationChartBoxLoginNo from "./RotationChartBoxLoginNo";
    export default {
        name: "RotationChartBox",
      components: {RotationChartBoxLoginNo, RotationChartBoxLoginYes},
      data(){
          return{
            rcb_courses:[
              {
                title:"前沿 / 区块链 / 人工智能",
                index:1,
                contain:{
                  c_title:"前沿技术",
                  c_classify:[
                    // {id:1,value:'测试'}
                  ]
                }
              },
              {
                title:"前端 / 小程序 / JS",
                index:2,
                contain:{
                  c_title:"前端开发",
                  c_classify:[
                    // {id:1,value:'测试'}
                  ]
                }
              },
              {
                title:"后端 / JAVA / Python",
                index:3,
                contain:{
                  c_title:"后端开发",
                  c_classify:[
                    // {id:1,value:'测试'}
                  ]
                }
              },
              {
                title:"移动 / Android / iOS",
                index:4,
                contain:{
                  c_title:"移动开发",
                  c_classify:[
                    // {id:1,value:'测试'}
                  ]
                }
              },
              {
                title:"云计算 / 大数据 / 容器",
                index:5,
                contain:{
                  c_title:"计算机基础",
                  c_classify:[
                    // {id:1,value:'测试'}
                  ]
                }
              },
              {
                title:"运维 / 测试 / 数据库",
                index:6,
                contain:{
                  c_title:"运维&测试",
                  c_classify:[
                    // {id:1,value:'测试'}
                  ]
                }
              },
              {
                title:"UI设计 / 3D动画 / 游戏",
                index:7,
                contain:{
                  c_title:"UI设计&多媒体",
                  c_classify:[
                    // {id:1,value:'测试'}
                  ]
                }
              },
            ],
            rcb_left_index:0,
            img_list:[
              { img_id:1,img_url:"/images/hoom_top1.png", link:"https://www.baidu.com/"},
              { img_id:2,img_url:"/images/hoom_top2.png", link:"https://www.taobao.com/"},
              { img_id:3,img_url:"/images/hoom_top3.png", link:"https://www.jd.com/"},
              { img_id:4,img_url:"/images/hoom_top4.png", link:"https://www.163.com/"}
            ],
            login_state:true,
          }
        },
      created:function(){
        let url =  this.Global.server_url + '/course/get_classify';
        for (let i in this.rcb_courses){
          this.Func_axios(url,this.rcb_courses[i].contain.c_classify ,'GET',{direction_name:this.rcb_courses[i].contain.c_title});
        }

      },
      mounted:function() {
        if (window.localStorage.getItem('islogin')){
          this.login_state=true;
        }
        Bus.$on('login_state_change',(data)=>{
          this.login_state=data;
        })

      },
      methods:{
        onMouseOver:function (index) {
          this.rcb_left_index = index;
        },
        onMouseLeave:function () {
          this.rcb_left_index = 0
        },
        /* param 为{"key":value} */
        Func_axios:function (aurl,  to_data, type, param=null) {
          if(type.toUpperCase() === 'GET'){
            if (param){
              this.axios.get(aurl,{params:param})
                .then(function (response) {
                  for (let i in response.data){
                    to_data.push(response.data[i]);
                  }
                })
                .catch(function (error) {
                  console.log(error)
                })
            } else{
              this.axios.get(aurl)
                .then(function (response) {
                  for (let i in response.data){
                    to_data.push(response.data[i])
                  }
                })
                .catch(function (error) {
                  console.log(error)
                })
            }
          }
          else{
            alert('post')
          }
        }
      }
    }

</script>

<style scoped>
  div,.rotation_chart_box,ul,li{
    margin: 0;
    padding: 0;
    border: none;
  }
  .rotation_chart_box{
    width: 1215px;
    margin: 0 auto;
    height: 400px;
    background-color: #2E323E;
    border-radius: 10px;
  }
  /* 左侧导航 */
  .ul_1{
    height: 400px;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 16px;
    text-align: center;
    color: #abadb2;
  }
  .li_1{
    transition: color 0.5s,background-color 0.5s;
  }
  .li_1>div:first-child{
    padding: 18px 0;
  }
  .li_1:hover{
    background-color: #21242c;
    color: white;
    cursor: pointer;
  }
  .li_1:first-child>div:first-child{
    border-radius: 10px 0 0 0;
  }
  .li_1:last-child>div:first-child,.li_1:first-child{
    border-radius: 0 0 0 10px;
  }
  .li_1 .hidden_div{
    height: 400px;
    width: 810px;
    background-color: white;
    position: absolute;
    left: 202px;
    top: 0;
    z-index: 1000;
    opacity: 0.8;
    padding: 10px 30px;
    box-sizing: border-box;
  }
  .li_1 .hidden_div div:first-child{
    height: 50px;
    text-align: start;
    line-height:50px;
  }
  .li_1 .hidden_div .ul_2{
    list-style: none;
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
  }
  .li_1 .hidden_div .li_2{
    color: black;
    margin-right: 20px;
    margin-bottom: 20px;
    font-size: 16px;
  }
  .router-link{
    font-size: 16px;
    color: black;
    text-decoration: none;
    transition: color 0.5s;
  }
  .router-link:hover{
    color: #00d6ff;
  }
  /* 左侧导航 END */

</style>
