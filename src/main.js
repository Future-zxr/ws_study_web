import Vue from 'vue'
import App from './App.vue'
import router from './router/route'

import Global from './components/Global'
Vue.prototype.Global = Global;

import axios from 'axios'
Vue.prototype.axios = axios;
import GlobalFunc from './Axios'
Vue.prototype.GlobalFunc = GlobalFunc;


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

/* svg */
import Icon from 'vue-svg-icon/Icon'
Vue.component('icon',Icon); // 注册
/* svg END*/

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
