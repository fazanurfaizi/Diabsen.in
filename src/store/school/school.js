import SchoolService from '@/core/services/school.service'

export default {
	namespaced: true,
	state() {
		return {
			schools: null,
			pagination: {
				currentPage: 1,
				lastPage: 1,
				total: 0,
			},
		}
	},
	getters: {
		getSchools: (state) => state.schools,
		getPagination: (state) => state.pagination,
	},
	mutations: {
		setSchools(state, payload) {
			state.schools = payload
		},
		setSchoolsPagination(state, payload) {
			state.pagination = payload
		},
	},
	actions: {
		async getSchools({ commit }, payload) {
			await SchoolService.getSchools(payload)
				.then((response) => {
					commit('setSchools', response.data.data)
					commit('setSchoolsPagination', {
						currentPage: response.data.meta.current_page,
						lastPage: response.data.meta.last_page,
						total: response.data.meta.total,
					})
				})
				.catch((error) => console.log(error))
		},
	},
}
