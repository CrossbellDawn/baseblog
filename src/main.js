import Vue from 'vue'
import router from './router'
import store from './store';
import App from './App'
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'
import './plugins/element'

Vue.component('SvgIcon', SvgIcon)
new Vue({
  el: '#app',
  // 启用路由
  router,
  store,
  render: h => h(App)
})
