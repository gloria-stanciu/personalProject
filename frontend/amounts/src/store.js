import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

const http = axios.create({baseURL: '/api'})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {},
  actions: {
    async getSignUpPage(ctx){
      await http.get('/SignUp')
  },
    async register(ctx, credentials){
      await http.post('/auth/register', {
        fullName: credentials.fullName,
        username: credentials.username,
        email: credentials.email,
        password: credentials.password
      })
      return true
      },
    async authUser(ctx, credentials){
      const response = await http.post('/auth/login', {
        username: credentials.username,
        password: credentials.password
      })
      localStorage.setItem('token', response.data)
      return true
    },
  },
  modules: {}
});
