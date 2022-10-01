import { axiosInstance } from './api.service'

class ProfileService {
    async getProfile() {
        return await new Promise((resolve, reject) => {
            axiosInstance.get(`${process.env.VUE_APP_API_URL_AUTH}/user/profile`)
                .then((response) => resolve(response))
                .catch((error) => reject(error))
        })
    } 

    async updateProfile(formData) {
        return await new Promise((resolve, reject) => {
            let params = {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                gender: formData.gender,
                birthdate: formData.birthdate,
            }
            
            axiosInstance.put(`${process.env.VUE_APP_API_URL_AUTH}/user/profile`, params)
                .then((response) => resolve(response))
                .catch((error) => reject(error))
        })
    }
}

export default new ProfileService()