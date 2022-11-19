<template>
	<div
		class="flex items-center"
		>
		<input
			id="checked-checkbox"
			type="checkbox"
			value=""
			:checked="checked"
			@click.stop.prevent="emits('change')"
			class="w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
		>
		<label
			for="checked-checkbox"
			class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
		>
		</label>
	</div>
</template>

<script setup>
import { defineComponent, defineProps, defineEmits } from 'vue';

defineComponent({
	name: 'v-single-checkbox'
})

defineProps({
	checked: {
		type: Boolean,
		required: true
	},
});

const emits = defineEmits(['change']);

</script>
