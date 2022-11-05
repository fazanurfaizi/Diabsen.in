import { axiosInstance } from './api.service'

class SchoolService {

    constructor() {
        this.baseUrl = process.env.VUE_APP_API_URL_MASTER_DATA
    }

    async getSchools({limit = 10, page = 1, keyword = '', sortBy = '', sortOrder = 'asc'}) {
        return await new Promise((resolve, reject) => {
            axiosInstance.get(`${this.baseUrl}/schools`, {
                params: {
                    limit,
                    page,
                    keyword,
                    sortBy,
                    sortOrder
                }
            })
                .then((response) => resolve(response))
                .catch((error) => reject(error))
        })
    } 

    // async updateProfile(formData) {
    //     return await new Promise((resolve, reject) => {
    //         let params = {
    //             name: formData.name,
    //             email: formData.email,
    //             phone: formData.phone,
    //             gender: formData.gender,
    //             birthdate: formData.birthdate,
    //         }
            
    //         axiosInstance.put(`${this.baseUrl}/user/profile`, params)
    //             .then((response) => resolve(response))
    //             .catch((error) => reject(error))
    //     })
    // }

    // async changePassword(formData) {
    //     return await new Promise((resolve, reject) => {
    //         let params = {
    //             current_password: formData.current_password,
    //             new_password: formData.new_password,
    //             confirm_password: formData.confirm_password,
    //         }

    //         axiosInstance.put(`${this.baseUrl}/user/change-password`, params)
    //             .then((response) => resolve(response))
    //             .catch((error) => reject(error))
    //     })
    // }
}

export default new SchoolService()