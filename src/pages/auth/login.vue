<template>
  <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md sm:my-auto">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-2">
          <div>
            <div class="mt-1">
              <input 
                v-model="form.email"
                placeholder="Email" 
                id="email" 
                name="email" 
                type="email" 
                autocomplete="email" 
                required
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
            </div>
          </div>

          <div>
            <div class="mt-1 relative">
              <input 
                v-model="form.password" 
                placeholder="Password" 
                id="password" 
                name="password" 
                :type="isShowPassword ? 'text':'password'" 
                autocomplete="current-password" 
                required 
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
                <Icon @click="isShowPassword = !isShowPassword" :name="isShowPassword ? 'eye':'eye-off'" class="h-5 w-5 absolute right-2 top-2 cursor-pointer" />
            </div>
          </div>         

          <div>
            <button @click.prevent="handleLogin()" type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secodary-dark">Sign in</button>
          </div>

          <div class="grid place-content-center">  
              <div class="text-sm">
                <router-link :to="{ name: 'forgot-password' }" class="font-medium text-primary">
                  Lupa Password?
                </router-link>
              </div>
          </div>
        </form>
      </div>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex'

export default defineComponent({
  name: 'login-page',
  setup() {
    const store = useStore()    

    const form = ref({
      email: '',
      password: ''
    })

    const isShowPassword = ref(false)

    const handleLogin = () => {
      store.dispatch('auth/login', form.value)       
    }

    return {
      form,
      isShowPassword,
      handleLogin
    }
  }
})
</script>