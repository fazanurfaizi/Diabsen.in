import { axiosInstance } from './api.service'

class AuthService {
    async login(email, password) {
        return await new Promise((resolve, reject) => {
            let params = {
                grant_type: process.env.VUE_APP_GRANT_TYPE,
                client_id: process.env.VUE_APP_CLIENT_ID,
                client_secret: process.env.VUE_APP_CLIENT_SECRET,
                username: email,
                password: password,
                scope: process.env.VUE_APP_SCOPE
            }
            
            axiosInstance.post(`${process.env.VUE_APP_API_URL_AUTH}/oauth/token`, params)
                .then((response) => resolve(response))
                .catch((error) => reject(error))
        })
    }

    async refresh(token) {
        return await new Promise((resolve, reject) => {
            let params = {
                grant_type: 'refresh_token',
                client_id: process.env.VUE_APP_CLIENT_ID,
                client_secret: process.env.VUE_APP_CLIENT_SECRET,
                refresh_token: token,                
                scope: process.env.VUE_APP_SCOPE
            }
            
            axiosInstance.post(`${process.env.VUE_APP_API_URL_AUTH}/oauth/token`, params)
                .then((response) => resolve(response))
                .catch((error) => reject(error))
        })
    }
}

export default new AuthService()