import profileService from '@/core/services/profile.service'

export default {
  namespaced: true,
  state () {
    return {
      user: null
    }
  },
  getters: {
    getUser: state => state.user,    
  },
  mutations: {
    setUser (state, user) {
      state.user = user
    },    
  },
  actions: {
    async getProfile({ commit }) {      
      profileService.getProfile()
        .then((response) => {
          commit('setUser', response.data)
          console.log(response)
        })
        .catch((error) => console.log(error))      
    },    
  }
}