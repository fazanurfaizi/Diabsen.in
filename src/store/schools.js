import SchoolService from '@/core/services/school.service'

export default {
	namespaced: true,
	state() {
		return {
			school: null,
			schools: [],
			pagination: {
				currentPage: 1,
				lastPage: 1,
				total: 0,
			},
		}
	},
	getters: {
		getSchool: (state) => state.school,
		getSchools: (state) => state.schools,
		getPagination: (state) => state.pagination,
	},
	mutations: {
		setSchool(state, payload) {
			state.school = payload
		},
		setSchools(state, payload) {
			state.schools = payload
		},
		setSchoolsPagination(state, payload) {
			state.pagination = payload
		},
	},
	actions: {
		async getSchools({ commit }, payload) {
			await SchoolService.list(payload)
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
		async getDetailSchool({ commit }, payload) {
			await SchoolService.show(payload)
				.then((response) => {
					commit('setSchool', response.data.data)
				})
				.catch((error) => console.log(error))
		}
	},
}
