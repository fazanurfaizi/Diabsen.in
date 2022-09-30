<template>
	<div class="flex h-screen overflow-hidden">
		<!-- Sidebar -->
		<Sidebar
			:sidebar-open="sidebarOpen"
			@close-sidebar="sidebarOpen = false"
		/>

		<!-- Content Area -->
		<div
			class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden"
		>
			
		<!-- Header -->
		<Header 
			:sidebar-open="sidebarOpen"
			@toggle-sidebar="sidebarOpen = !sidebarOpen"
		/>

		<main>
			<div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">          
			<breadcrumb/>			
			<router-view v-slot="{ Component }">
				<transition name="fade" mode="out-in">
					<keep-alive>
						<component :is="Component" />
					</keep-alive>
				</transition>
			</router-view>
			</div>
		</main>

		<!-- Footer -->
		<Footer color-text="black" />
		</div>
	</div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import Breadcrumb from '@/components/layout/breadcrumb/index.vue';
import Sidebar from '@/components/layout/sidebar/index.vue';
import Header from '@/components/layout/header/index.vue';
import Footer from '@/components/layout/footer/index.vue';

export default defineComponent({
  name: 'BaseLayout',
  components: {
    Breadcrumb,
    Sidebar,
    Header,    
    Footer
  },
  setup() {
    const sidebarOpen = ref(false)
    return {
      sidebarOpen,
    }
  },
})
</script>