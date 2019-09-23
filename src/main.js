import Vue from 'vue'
import App from './App.vue'
import router from './router/route'
import Global from './components/Global'


Vue.prototype.Global = Global;
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
