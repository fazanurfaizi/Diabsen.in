import createPersistedState from 'vuex-persistedstate'
import { createStore } from 'vuex'
import auth from './auth'
import profile from './profile'
import userable from './userable'
import schools from './schools'

export default createStore({
	modules: {
		auth,
		profile,
		userable,
		schools,
	},
	plugins: [createPersistedState()],
})
