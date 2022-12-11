import store from '@/store'

export const auth = (to, from, next) => {
	if (to.meta.requiresAuth && !store.getters['auth/isAuthenticated']) {
		next({
			path: '/auth/login',
			query: {
				redirect: to.fullPath,
			},
		})
	} else if (!to.meta.requiresAuth && store.getters['auth/isAuthenticated']) {
		next({
			name: 'dashboard',
		})
	}

	next()
}

export default auth
