import Vue from 'vue'
import router from './router'
import App from './App'
import './plugins/element'

//import axios from 'axios'
//Vue.prototype.$http = axios
new Vue({
	el: '#app',
	// 启用路由
	router,
	// 启用 ElementUI
	render: h => h(App)
})