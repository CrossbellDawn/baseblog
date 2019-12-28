import Vue from 'vue'
import router from './router'
import App from './App'
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'
import './plugins/element'

Vue.component('SvgIcon', SvgIcon)
new Vue({
  el: '#app',
  // 启用路由
  router,
  // 启用 ElementUI
  render: h => h(App)
})
