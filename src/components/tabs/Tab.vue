<template>
	<div
		@click="onClickTab"
		:class="{
			'border-0 border-b-2 border-solid border-black':
				isActive && indicator,
		}"
	>
		<slot>
			<div class="pr-2 pt-2 pl-5 pb-5"></div>
		</slot>
	</div>
</template>

<script>
	import { defineComponent, inject, reactive, computed, toRefs } from 'vue'

	export default defineComponent({
		name: 'v-tab',
		props: {
			val: {
				default: null,
				type: [String, Number],
			},
			label: {
				default: null,
				type: String,
			},
			indicator: {
				default: false,
				type: Boolean,
			},
		},
		setup(props) {
			const tabs = inject('tabs', {
				state: reactive({
					active: null,
				}),
				activateTab: () => {},
			})

			const state = reactive({
				isActive: computed(() => tabs.state.active === props.val),
			})

			const onClickTab = () => {
				tabs.activateTab(props.val)
			}

			return {
				tabs,
				onClickTab,
				...toRefs(state),
			}
		},
	})
</script>
