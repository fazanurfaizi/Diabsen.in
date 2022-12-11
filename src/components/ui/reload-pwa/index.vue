<template>
	<div v-if="serviceWorkerAvailable && (offlineReady || needRefresh)" class="flex flex-wrap" role="alert">
		<div class="message mt-1">
			<span v-if="offlineReady">App ready to work offline.</span>
			<span v-else>New content available, click on reload button to update.</span>
		</div>
		<div class="buttons flex align-middle mt-2 md:mt-0">
			<button class="button" v-if="needRefresh" @click="updateServiceWorker()">
				Reload
			</button>
			<button class="button" @click="close()">
				Close
			</button>
		</div>
	</div>
</template>

<script>
import { defineComponent } from 'vue'
import { useRegisterSW } from 'virtual:pwa-register/vue'
import { computed } from '@vue/reactivity'

const { updateServiceWorker } = useRegisterSW()

export default defineComponent({
	name: 'reload-pwa',
	setup() {
		const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW()

		const serviceWorkerAvailable = computed(() => 'serviceWorker' in navigator)

		const close = async () => {
			offlineReady.value = false
			needRefresh.value = false
		}

		return {
			serviceWorkerAvailable,
			offlineReady,
			needRefresh,
			updateServiceWorker,
			close
		}
	},
	methods: {
		async close () {
			this.offlineReady.value = false
			this.needRefresh.value = false
		},
		async updateServiceWorker() {
			await updateServiceWorker()
		}
	}
})
</script>
