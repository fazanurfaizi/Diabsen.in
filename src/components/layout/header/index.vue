<!-- <template>
  <div class="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-primary shadow border-b-8 border-secondary">
        
  </div>
</template> -->

<template>
	<header class="sticky top-0 bg-primary shadow border-b-8 border-secondary z-30">
		<div class="px-4 sm:px-6 lg:px-8">
			<div class="flex items-center justify-between h-16 -mb-px">
				<!-- Header Left -->
				<div class="flex">
					<!-- Hamburger button -->
					<button
						class="text-gray-200 hover:text-gray-600 lg:hidden"
						@click.stop="$emit('toggle-sidebar')"
					>
						<span class="sr-only">Open sidebar</span>
						<svg
							class="w-6 h-6 fill-current"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect x="4" y="5" width="16" height="2" />
							<rect x="4" y="11" width="16" height="2" />
							<rect x="4" y="17" width="16" height="2" />
						</svg>
					</button>
				</div>

				<!-- Header Right -->
				<div class="flex-1 px-1 flex justify-end">
          <div class="ml-4 flex items-center md:ml-6">
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
                <router-link 
                  to="/profile" 
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-secondary-light hover:text-white" 
                  role="menuitem" 
                  tabindex="-1" 
                  id="user-menu-item-0"
                >
                  <div class="inline-flex items-center">
                    <heroicons-outline-vue name="user-circle" class="w-4 h-4 mr-2" />
                    <span>Profil</span>
                  </div>
                </router-link>

                <router-link 
                  to="/forgot-password" 
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-secondary-light hover:text-white" 
                  role="menuitem" 
                  tabindex="-1" 
                  id="user-menu-item-0"
                >
                  <div class="inline-flex items-center">
                    <heroicons-outline-vue name="lock-closed" class="w-4 h-4 mr-2" />
                    <span>Ubah Kata Sandi</span>
                  </div>
                </router-link>

                <a href="#" 
                  @click.prevent="logout()" 
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-secondary-light hover:text-white" 
                  role="menuitem" 
                  tabindex="-1" 
                  id="user-menu-item-2"
                >
                  <div class="inline-flex items-center">
                    <heroicons-outline-vue name="power" class="w-4 h-4 mr-2" />
                    <span>Keluar</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
			</div>
		</div>
	</header>
</template>

<script>
import heroiconsOutlineVue from '@/components/icons/heroicons-outline.vue'
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'TheHeader',
  components: {
    heroiconsOutlineVue
  },
  props: {
    sidebarOpen: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const store = useStore()
    const router = useRouter()

    const isShow = ref(false);

    const logout = () => {
      store.commit('logout')
      router.push('index')
    }

    return {
      isShow,
      logout
    }
  }
})
</script>