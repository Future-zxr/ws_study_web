<template>
    <div class="courseware"  overflow="hidden">
      <el-page-header @back="goBack" content="详情页面" class="heard-css"></el-page-header>
      <div>
        <el-row>
          <el-col :span="3" style="margin-right: 10px">
            <el-tag class="el-t-css"> Python</el-tag>
            <el-input placeholder="输入关键字进行过滤" v-model="filterText"  prefix-icon="el-icon-search"></el-input>
            <el-tree
              class="filter-tree"
              :data="data"
              :props="defaultProps"
              default-expand-all
              :filter-node-method="filterNode"
              ref="tree">
            </el-tree>
          </el-col>
          <el-col :span="20">
            <el-row type="flex" justify="center">
              <el-col :span="3"><h1>Python</h1></el-col>
            </el-row>
            <el-row type="flex" justify="center">
<!--              <el-rol>-->
<!--              </el-rol>-->
            </el-row>
          </el-col>
        </el-row>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Courseware",
      data(){
          return{
            course_id:1001,
            filterText: '',
            data: [{
              id: 1,
              label: '一级 1',
              children: [{
                id: 4,
                label: '二级 1-1',
              }]
            }, {
              id: 2,
              label: '一级 2',
              children: [{
                id: 5,
                label: '二级 2-1'
              }, {
                id: 6,
                label: '二级 2-2'
              }]
            }, {
              id: 3,
              label: '一级 3',
              children: [{
                id: 7,
                label: '二级 3-1'
              }, {
                id: 8,
                label: '二级 3-2'
              }]
            }],
            defaultProps: {
              children: 'children',
              label: 'label'
            }
          }
      },
      methods:{
        filterNode(value, data) {
          if (!value) return true;
          return data.label.indexOf(value) !== -1;
        },
        goBack() {
          console.log('go back');
        },
        /* 获取课件列表 根据id */
        onGetListCourseware:function () {
          let url = this.Global.server_url + '/course/get_courseware_chapter/';
          console.log('1123');
          this.GlobalFunc.func_axios(url,'GET', this.courseware_id,
            res=>{ this.show_course(this.data,res) }
          )
        },
        /* 获取课程 根据条件 END */
        show_course:function(to_data, res){
          console.log(to_data,res);

        },

      },
      watch: {
        filterText(val) {
          this.$refs.tree.filter(val);
        }
      },
      created() {
        // this.onGetListCourseware();
      }
    }
</script>

<style scoped>
  div{
    margin: 0;
    padding: 0;
    border: none;
  }
  .courseware{
    /*width: 1912px;*/
  }
  .el-t-css{
    width: 100%;
    font-size: 20px;
    color: black;
    background: white;
    border:none;
    font-weight: 600;
  }
  .heard-css{
    height: 40px;
    line-height: 40px;
  }

</style>
