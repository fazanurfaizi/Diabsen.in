<template>
	<span>
		<component :is="currentIcon" :class="attrs.class"></component>
	</span>
</template>

<script>
	export default {
		name: 'svg-icon',
	}
</script>

<script setup>
	import { computed, defineAsyncComponent, defineProps, useAttrs } from 'vue'

	const props = defineProps({
		dir: {
			type: String,
			required: false,
			default: 'icons',
		},
		name: {
			type: String,
			required: true,
		},
	})

	const currentIcon = computed(() =>
		defineAsyncComponent({
			loader: () => import(`../../../assets/icons/${props.name}.svg`),
			loadingComponent: {
				template: '<span></span>',
			},
			errorComponent: {
				template: '<span>error</span>',
			},
			delay: 200,
			timeout: 3000,
			suspensible: true,
		})
	)

	const attrs = useAttrs()
</script>
