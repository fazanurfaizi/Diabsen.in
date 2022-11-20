import { axiosInstance } from './api.service'

class AuthService {
    async login(email, password) {
        return await new Promise((resolve, reject) => {
            let params = {
                grant_type: import.meta.env.VITE_GRANT_TYPE,
                client_id: import.meta.env.VITE_CLIENT_ID,
                client_secret: import.meta.env.VITE_CLIENT_SECRET,
                username: email,
                password: password,
                scope: import.meta.env.VITE_SCOPE
            }

            axiosInstance.post(`${import.meta.env.VITE_API_URL_AUTH}/oauth/token`, params)
                .then((response) => resolve(response))
                .catch((error) => reject(error))
        })
    }

    async refresh(token) {
        return await new Promise((resolve, reject) => {
            let params = {
                grant_type: 'refresh_token',
                client_id: import.meta.env.VITE_CLIENT_ID,
                client_secret: import.meta.env.VITE_CLIENT_SECRET,
                refresh_token: token,
                scope: import.meta.env.VITE_SCOPE
            }

            axiosInstance.post(`${import.meta.env.VITE_API_URL_AUTH}/oauth/token`, params)
                .then((response) => resolve(response))
                .catch((error) => reject(error))
        })
    }
}

export default new AuthService()
