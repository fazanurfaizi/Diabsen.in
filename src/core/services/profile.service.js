import { axiosInstance } from './api.service'

class ProfileService {
    async getProfile() {
        return await new Promise((resolve, reject) => {
            axiosInstance.get(`${process.env.VUE_APP_API_URL_AUTH}/user/profile`)
                .then((response) => resolve(response))
                .catch((error) => reject(error))
        })
    } 
}

export default new ProfileService()