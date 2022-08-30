<template>
  <div class="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-primary shadow border-b-8 border-secondary">
          
    <div class="flex-1 px-4 flex justify-end">
      <div class="ml-4 flex items-center md:ml-6">
        <!-- Profile dropdown -->
        <div class="ml-3 relative">
          <div class="max-w-xs h-6 w-6 bg-primary-light text-white flex items-center justify-center text-xs rounded-full ">
            JD
          </div>
        </div>
        <div class="text-sm text-white pl-2 cursor-pointer" @click="isShow = !isShow" >
          John Doe
        </div>
        <div class="ml-1 relative">
          <div>
            <button type="button" class="max-w-xs flex text-white items-center text-sm" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span class="sr-only">Open user menu</span>
              <Icon name="chevron-down" set="solid" class="w-5 h-5" @click="isShow = !isShow" />
            </button>
          </div>
          <div v-show="isShow" class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
            <!-- Active: "bg-gray-100", Not Active: "" -->
            <router-link to="profile">
              <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Profile</a>
            </router-link>

            <a href="#" @click.prevent="logout()" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HeaderComponent',
  data(){
    return {
      isShow: false,
    }
  },
  methods: {
    logout(){
      this.$router.push({path: '/'})
    }
  }, 
}
</script>