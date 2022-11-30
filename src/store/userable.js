import userableService from '@/core/services/userable.service'

export default {
	namespaced: true,
	state() {
		return {
			userable: null,
		}
	},
	getters: {
		getUserable: (state) => state.userable,
	},
	mutations: {
		setUserable(state, userable) {
			state.userable = userable
		},
	},
	actions: {
		async fetchUserable({ commit }, payload) {
			userableService
				.getUserable(payload)
				.then((response) => {
					commit('setUserable', response.data.data.user)
				})
				.catch((error) => console.error(error))
		},
	},
}
