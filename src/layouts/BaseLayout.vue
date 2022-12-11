<template>
	<div class="flex h-screen overflow-hidden scrollbar-thin">
		<!-- Sidebar -->
		<Sidebar
			:sidebar-open="sidebarOpen"
			@close-sidebar="sidebarOpen = false"
		/>

		<!-- <ReloadPwa /> -->

		<div
			class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden"
		>
			<Header
				:sidebar-open="sidebarOpen"
				@toggle-sidebar="sidebarOpen = !sidebarOpen"
			/>

			<main class="bg-gray-100">
				<div class="px-4 sm:px-6 lg:px-8 py-8">
					<!-- <breadcrumb /> -->

					<router-view v-slot="{ Component }">
						<transition name="fade" mode="out-in">
							<component :is="Component" />
						</transition>
					</router-view>

					<Footer color-text="black" />
				</div>
			</main>
		</div>
	</div>
</template>

<script>
	import { defineComponent, ref } from 'vue'
	// import Breadcrumb from '@/components/layout/breadcrumb/index.vue'
	import Sidebar from '@/components/layout/sidebar/index.vue'
	import Header from '@/components/layout/header/index.vue'
	import Footer from '@/components/layout/footer/index.vue'
	// import ReloadPwa from '@/components/ui/reload-pwa/index.vue'

	export default defineComponent({
		name: 'BaseLayout',
		components: {
			// ReloadPwa,
			// Breadcrumb,
			Sidebar,
			Header,
			Footer,
		},
		setup() {
			const sidebarOpen = ref(false)
			return {
				sidebarOpen,
			}
		},
	})
</script>

<style scoped>
	::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.3);
		border-radius: 10px;
		background-color: #f5f5f5;
	}

	::-webkit-scrollbar {
		width: 10px;
		background-color: #f5f5f5;
	}

	::-webkit-scrollbar-thumb {
		border-radius: 10px;
		-webkit-box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.3);
		background-color: bg-gray-400;
	}
</style>
