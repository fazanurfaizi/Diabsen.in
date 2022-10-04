import createPersistedState from "vuex-persistedstate";
import { createStore } from 'vuex'
import auth from './auth'
import profile from "./profile"

export default createStore({
  modules: {
    auth,
    profile
  },
  plugins: [createPersistedState()],
})