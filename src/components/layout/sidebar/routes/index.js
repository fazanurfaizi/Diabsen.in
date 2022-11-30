import store from '@/store/index.js'
import { superAdminRoutes } from './superAdmin'
import { schoolAdminRoutes } from './schoolAdmin'

const routes = {
	'Super Admin': superAdminRoutes,
	Admin: schoolAdminRoutes,
}

const user = store.getters['profile/getUserProfile']

export const appRoutes = routes[user?.role]
