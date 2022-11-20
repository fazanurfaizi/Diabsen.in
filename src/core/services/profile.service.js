import { axiosInstance } from './api.service'

class ProfileService {

    constructor() {
        this.baseUrl = import.meta.env.VITE_API_URL_AUTH
    }

    async getProfile() {
        return await new Promise((resolve, reject) => {
            axiosInstance.get(`${this.baseUrl}/user/profile`)
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

            axiosInstance.put(`${this.baseUrl}/user/profile`, params)
                .then((response) => resolve(response))
                .catch((error) => reject(error))
        })
    }

    async changePassword(formData) {
        return await new Promise((resolve, reject) => {
            let params = {
                current_password: formData.current_password,
                new_password: formData.new_password,
                confirm_password: formData.confirm_password,
            }

            axiosInstance.put(`${this.baseUrl}/user/change-password`, params)
                .then((response) => resolve(response))
                .catch((error) => reject(error))
        })
    }
}

export default new ProfileService()
