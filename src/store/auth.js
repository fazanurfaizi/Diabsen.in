export default{
  state () {
    return {
      token: null
    }
  },
  getters: {
    isAuthenticated: state => !!state.token,
    getToken: state => state.token,
  },
  mutations: {
    setToken (state, token) {
      state.token = token
    },
    logout(state){
      state.token = null
    },
  },
}