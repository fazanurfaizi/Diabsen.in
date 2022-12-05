<template>
	<button
		@click.prevent="action()"
		class="bg-[#4299E1] hover:bg-blue-700 p-[4px] rounded-[4px] text-white w-[78px] h-[36px] text-[14px]"
	>
		{{ label }}
	</button>
</template>

<script>
	import { defineComponent } from 'vue'

	export default defineComponent({
		name: 'action-button',
		props: {
			label: {
				type: String,
				required: true,
			},
			action: {
				type: Function,
				required: true,
			},
		},
	})
</script>
