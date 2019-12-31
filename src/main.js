import Vue from 'vue'
import router from './router'
import store from './store';
import App from './App'
import './icons'
import './plugins/element'

new Vue({
  el: '#app',
  // 启用路由
  router,
  store,
  render: h => h(App)
})
