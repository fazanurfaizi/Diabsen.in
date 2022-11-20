import authService from '@/core/services/auth.service'
import router from '@/router'

export default {
	namespaced: true,
	state() {
		return {
			token: '',
			refreshToken: '',
		}
	},
	getters: {
		isAuthenticated: (state) => !!state.token,
		getToken: (state) => state.token,
		getRefreshToken: (state) => state.refreshToken,
	},
	mutations: {
		setToken(state, token) {
			state.token = token
		},
		setRefreshToken(state, token) {
			state.refreshToken = token
		},
	},
	actions: {
		async login({ commit }, payload) {
			authService
				.login(payload.email, payload.password)
				.then((response) => {
					console.log(response)
					commit('setToken', response.data.data.access_token)
					commit('setRefreshToken', response.data.data.refresh_token)
					commit('profile/setUserProfile', response.data.data.user, {
						root: true,
					})
				})
				.catch((error) => console.log(error))
		},

		async refresh({ commit }, payload) {
			authService
				.refresh(payload)
				.then((response) => {
					commit('setToken', response.data.access_token)
					commit('setRefreshToken', response.data.refresh_token)
				})
				.catch((error) => console.log(error))
				.finally(() =>
					router.push({
						path:
							router.currentRoute.value.query.redirect ||
							router.currentRoute.value.path,
						force: true,
					})
				)
		},

		async logout({ commit }) {
			commit('setToken', null)
			commit('setRefreshToken', null)
			router.push({ name: 'login' })
		},
	},
}
