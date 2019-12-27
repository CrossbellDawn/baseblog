import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/main',
		name: 'main',
		component: () => import( /* webpackChunkName: "about" */ '../views/Main.vue')
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('../views/Login.vue')
	}
]

const router = new VueRouter({
	routes
})

export default router
