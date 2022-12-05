<template>
	<div class="flex flex-nowrap overflow-x-auto text-center cursor-pointer">
		<slot></slot>
	</div>
</template>

<script>
	import { defineComponent, provide, computed, reactive } from 'vue'

	export default defineComponent({
		name: 'v-tabs',
		props: {
			modelValue: {
				default: null,
				type: [String, Number],
			},
		},
		emits: ['update:modelValue'],
		setup(props, { emit }) {
			const state = reactive({
				active: computed(() => props.modelValue),
			})

			const activateTab = (tab) => {
				emit('update:modelValue', tab)
			}

			provide('tabs', {
				state,
				activateTab,
			})
		},
	})
</script>
