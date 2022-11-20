<template>
	<button
		@click="router.back()"
		class="border border-[#4299E1] p-[4px] rounded-[4px] text-[#4299E1] w-20 h-9 text-sm hover:bg-[#4299E1] hover:text-white"
	>
		{{ title }}
	</button>
</template>

<script>
	import { defineComponent } from 'vue'
	import { useRouter } from 'vue-router'

	export default defineComponent({
		name: 'back-button',
		props: {
			title: {
				type: String,
				required: true,
			},
		},
		setup() {
			const router = useRouter()

			return {
				router,
			}
		},
	})
</script>
