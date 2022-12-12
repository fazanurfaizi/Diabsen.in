import store from '@/store'
import router from '@/router'
import { toTitleCase } from '../utils'

export const permissions = (controller, action) => {
	const permissions = store.getters['profile/getUserProfile'].permissions

	if (permissions) {
		const appController = `App\\Http\\Controllers\\${toTitleCase(
			controller
		)}Controller@${action}`
		if (!permissions.includes(appController)) {
			router.push({ name: 'dashboard' })
		}
	}
}

export default permissions
