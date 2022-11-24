import { axiosInstance } from './api.service'

class UserableService {
	constructor() {
		this.baseUrl = import.meta.env.VITE_API_URL_MASTER_DATA
	}

	async getUserable(userId) {
		return await new Promise((resolve, reject) => {
			axiosInstance
				.get(`${this.baseUrl}/users`, {
					params: { user_id: userId },
				})
				.then((response) => resolve(response))
				.catch((error) => reject(error))
		})
	}
}

export default new UserableService()
