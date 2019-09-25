<template>
    <ul class="list">
      <li v-for="item in list" >
        <router-link :to="item.link_href">{{item.link_text}}</router-link>
      </li>
    </ul>
</template>
<script>
  export default {
    data() {
      return {
        list:[{"link_href":"/my/profile","link_text":'我的资料'},
          {"link_href":"/my/total","link_text":'全部课程'},
          {"link_href":"/my/collection","link_text":'收藏的课程'},
          {"link_href":"/my/continue","link_text":'未完成课程'},
          {"link_href":"/my/finish","link_text":'已结束课程'},
          {"link_href":"/my/account","link_text":'账户设置'},
        ],
      };
    },
    watch:{
      '$route'(to,from){
        if(to.name==='my' ||to.name==='profile'){
          this.$router.push('/my/profile')
        }
      }
    },
    methods: {
    }
  }
</script>



<style scoped>
    ul{
      margin: 0;
      padding: 0;
    }
   ul li{
     height: 35px;
     width: 100%;
     line-height: 35px;
     font-size: 16px;
     padding-left: 16px;
     box-sizing: border-box;
     list-style-type:none;
  }
   ul li a{
    text-decoration: none;
     color: black;
  }
  ul li:hover{
    background: #dadada;
  }

</style>
