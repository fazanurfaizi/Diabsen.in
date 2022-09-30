import authService from '@/core/services/auth.service'
import router from '@/router'

export default {
  namespaced: true,
  state () {
    return {
      token: '',
      refreshToken: ''
    }
  },
  getters: {
    isAuthenticated: state => !!state.token,
    getToken: state => state.token,
    getRefreshToken: state => state.refreshToken
  },
  mutations: {
    setToken (state, token) {
      state.token = token
    },
    setRefreshToken (state, token) {
      state.refreshToken = token
    },    
  },
  actions: {
    async login({ commit, dispatch }, payload) {      
      authService.login(payload.email, payload.password)
        .then((response) => {
          commit('setToken', response.data.access_token)                    
          commit('setRefreshToken', response.data.refresh_token)
          dispatch('profile/getProfile', null, { root: true })
        })
        .catch((error) => console.log(error))
        .finally(() => router.push({ path: router.currentRoute.value.query.redirect || '/dashboard', force: true }))
    },
    async refresh({ commit }, payload) {      
      authService.refresh(payload.token)
        .then((response) => {
          commit('setToken', response.data.access_token)                    
          commit('setRefreshToken', response.data.refresh_token)          
        })
        .catch((error) => console.log(error))      
        .finally(() => router.push({ path: router.currentRoute.value.query.redirect || '/dashboard', force: true }))
    },
    async logout({ commit }) {
      commit('setToken', null)
      commit('setRefreshToken', null)
      router.push({ name: 'login' })
    }
  }
}