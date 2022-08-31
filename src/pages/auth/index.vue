<template>
  <div class="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 items-center bg-primary">  
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md sm:my-auto">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-2">
          <div>
            <div class="mt-1">
              <input 
                v-model="email"
                placeholder="Email" 
                id="email" 
                name="email" 
                type="email" 
                autocomplete="email" 
                required="" 
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
            </div>
          </div>

          <div>
            <div class="mt-1">
              <input 
                v-model="password" 
                placeholder="Password" 
                id="password" 
                name="password" 
                type="password" 
                autocomplete="current-password" 
                required="" 
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
            </div>
          </div>         

          <div>
            <button @click.prevent="login()" type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secodary-dark">Sign in</button>
          </div>

          <div class="grid place-content-center">  
              <div class="text-sm">
                <router-link to="forgot-password">
                  <a href="#" class="font-medium text-primary"> Lupa Password? </a>
                </router-link>
              </div>
          </div>
        </form>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/layouts/TheFooter.vue';
import Cookies from 'js-cookie'
export default {
  name: "LoginPage",
  components: { Footer },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login(){

      let param = {
        grant_type: "password",
        client_id: "2",
        client_secret: "GPLDq2IbUubERddpJRPNwuAhHt0u4mfBTADsM40P",
        username: this.email,
        password: this.password,
        scope: "*"
      }
      
      await this.axios.post("http://localhost:8000/oauth/token", param).then((response) => {
        console.log(response);
        Cookies.set('access_token', response.data.access_token);
        Cookies.set('refresh_token', response.data.refresh_token);
        this.$router.push('/dashboard')
      }).catch((e) => {
        console.log(e);
      });
    }
  },
}
</script>