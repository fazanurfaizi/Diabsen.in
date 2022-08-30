<template>
  <div class="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 items-center bg-primary">  
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md sm:my-auto">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-2" action="#" method="POST">
          <div>
            <div class="mt-1">
              <input placeholder="Username" id="email" name="email" type="email" autocomplete="email" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
            </div>
          </div>

          <div>
            <div class="mt-1">
              <input placeholder="Password" id="password" name="password" type="password" autocomplete="current-password" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
            </div>
          </div>         

          <div>
            <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secodary-dark">Sign in</button>
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
import Footer from './componets/Footer.vue';
export default {
    name: "LoginPage",
    components: { Footer }
}
</script>