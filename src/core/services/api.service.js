import axios from 'axios'

/**
 * @description service to call HTTP request via Axios
 */
export const axiosInstance = axios.create({
	headers: {
		'Content-Type': 'application/json',
	},
})

export const setupAxiosInterceptors = (store) => {
	axiosInstance.interceptors.request.use(
		(config) => {
			const token = store.getters['auth/getToken']
			if (token) {
				config.headers['Authorization'] = `Bearer ${token}`
			}

			return config
		},
		(error) => {
			return Promise.reject(error)
		}
	)

	axiosInstance.interceptors.response.use(
		(response) => response,
		async (err) => {
			const originalConfig = err.config

			if (originalConfig.url !== '/oauth/token' && err.response) {
				// Access Token was expired
				if (err.response.status === 401 && !originalConfig._retry) {
					originalConfig._retry = true

					try {
						store.dispatch(
							'auth/refresh',
							store.getters['auth/getRefreshToken']
						)

						return axiosInstance(originalConfig)
					} catch (e) {
						return Promise.reject(e)
					}
				}
			}

			return Promise.reject(err)
		}
	)
}
