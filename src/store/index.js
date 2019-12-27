import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		token: '' || Cookies.get('token'),
	},
	mutations: {
		settoken(state, data) {
			state.token = data;
		}
	},
	actions: {
		commitsettoken: ({
			commit
		}, token) => commit('settoken', token)
	},
});
