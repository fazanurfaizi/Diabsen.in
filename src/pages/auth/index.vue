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
        grant_type: process.env.VUE_APP_GRANT_TYPE,
        client_id: process.env.VUE_APP_CLIENT_ID,
        client_secret: process.env.VUE_APP_CLIENT_SECRET,
        username: this.email,
        password: this.password,
        scope: "*"
      }
      
      await this.axios.post(process.env.VUE_APP_API_URL_AUTH + "/oauth/token", param).then((response) => {
        Cookies.set('access_token', response.data.access_token, {
          // expires: 10/86400
          expires: response.data.expires_in/86400
        });
        Cookies.set('refresh_token', response.data.refresh_token, {
          expires: 1
        });
        this.$router.push('/dashboard')
      }).catch((e) => {
        console.log(e);
      });
    }
  },
}
</script>