import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Main from '../views/Main.vue'
import Chart from '../components/Chart/Chart.vue'
import Users from '../components/Users/Users.vue'

Vue.use(VueRouter)

const routes = [{
	path: '/',
	name: 'login',
	component: Login
}, {
	path: '/login',
	name: 'login',
	component: Login
}, {
	path: '/main',
	component: Main,
	redirect: '/chart',
	children: [{
			path: '/chart',
			component: Chart
		},
		{
			path: '/users',
			component: Users
		}
	]
}]

const router = new VueRouter({
	routes
})

//	挂载路由导航守卫
/**
 * to	将要访问的路径
 * from 代表从哪跳转来
 * next	表示放行函数
 */
router.beforeEach((to, from, next) => {
	if (to.path === '/login') return next(); //	登录放行
	//获取token
	const tokenStr = window.sessionStorage.getItem('token')
	if (!tokenStr) return next('/login')
	next()
})

export default router