<template>
	<div class="mt-5 p-6 bg-white rounded-lg">
		<div class="mb-1">
			<h1 class="text-xl font-normal text-title-content py-2.5">
				{{ title }}
			</h1>
		</div>
		<div class="my-1">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import { defineComponent } from 'vue'

	export default defineComponent({
		name: 'v-container',
		props: {
			title: {
				type: String,
				required: false,
			},
		},
	})
</script>
