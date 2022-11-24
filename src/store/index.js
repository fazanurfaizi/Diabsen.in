import createPersistedState from 'vuex-persistedstate'
import { createStore } from 'vuex'
import auth from './auth'
import profile from './profile'
import userable from './userable'
import school from './school/school'

export default createStore({
	modules: {
		auth,
		profile,
		userable,
		school,
	},
	plugins: [createPersistedState()],
})
