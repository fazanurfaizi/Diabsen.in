<template>
	<select
		v-model="rowsComputed"
		id="rows-selector"
		class="bg-gray-50 border w-16 py-2 px-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
	>
		<option
			v-for="item in rowsItems"
			:key="item"
			@click="changeSelectedRows(item)"
		>
			{{ item }}
		</option>
	</select>
</template>

<script>
	export default {
		name: 'v-rows-selector',
		inheritAttrs: false,
		customOptions: {},
	}
</script>

<script setup>
	import { defineProps, defineEmits, computed } from 'vue'

	const props = defineProps({
		modelValue: {
			type: Number,
			required: true,
		},
		rowsItems: {
			type: Array,
			required: true,
		},
	})

	const emits = defineEmits(['update:modelValue'])

	const rowsComputed = computed({
		get: () => props.modelValue,
		set: (value) => {
			emits('update:modelValue', value)
		},
	})

	const changeSelectedRows = (value) => {
		rowsComputed.value = value
	}
</script>
