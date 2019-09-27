<template>
    <div id="nav_fixed" v-if="flag" :class="{nav_fixed:isActive}" @click="backTop">
     wudi
    </div>
</template>
<script>
    export default {
        name: "NavFixed",
      data(){
          return{
            isActive:true,
            flag:''
          }
      },
      mounted () {
        window.addEventListener('scroll', this.scrollToTop)
      },
      destroyed () {
        window.removeEventListener('scroll', this.scrollToTop)
      },
      methods:{
        backTop () {
          let scroll = document.documentElement.scrollTop || document.body.scrollTop;
          let timer = setInterval(() => {
            scroll -= 80;
            window.scrollTo(0,scroll);
            if (scroll <= 0) {
              clearInterval(timer)
            }
          }, 1)
        },
        scrollToTop () {
          let scroll=document.documentElement.scrollTop || document.body.scrollTop;
          if (scroll>300){
            this.flag=true
          }else{
            this.flag=false
          }
        }
      }
    }
</script>

<style scoped>
  .nav_fixed{
    width: 40px;
    height: 150px;
    position: fixed;
    right: 0;
    bottom: 0;
    background-color: pink;
  }
  .nav_fixed:hover{
    cursor: pointer;
  }
</style>
