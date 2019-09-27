<!-- 不会改变时：【因为改变的话，某个组件变化其值，但其他组件不会重新渲染】-->
<script>
    export default {
        name: "Global",

      server_url:"http://127.0.0.1:8000",
      img_url:"http://pxebavmp1.bkt.clouddn.com",


    }
</script>

<!--
// main.js
import Global from 'components/Global'
Vue.prototype.Global = Global;

// index.vue
{{Global.server_url}}
-->
