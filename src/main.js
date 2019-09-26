import Vue from 'vue'
import App from './App.vue'
import router from './router/route'

import Global from './components/Global'
Vue.prototype.Global = Global;

import axios from 'axios'
Vue.prototype.axios = axios;


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);


new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
