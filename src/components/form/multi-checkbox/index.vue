<template>
	<div class="flex items-center">
		<input
			id="checked-checkbox"
			type="checkbox"
			:checked="isChecked"
			@click.stop.prevent="toggleChecked"
			class="w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
		/>
		<label
			for="checked-checkbox"
			class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
		>
		</label>
	</div>
</template>

<script>
	export default {
		name: 'v-multi-checkbox',
		inheritAttrs: false,
		customOptions: {},
	}
</script>

<script setup>
	import { defineProps, defineEmits, computed } from 'vue'

	const props = defineProps({
		status: {
			type: String,
			required: true,
			validator: (value) => {
				return ['noneSelected', 'partSelected', 'allSelected'].includes(
					value
				)
			},
		},
	})

	const emits = defineEmits(['change'])

	const isChecked = computed(() => props.status === 'allSelected')

	const toggleChecked = () => {
		emits('change', !isChecked.value)
	}
</script>
