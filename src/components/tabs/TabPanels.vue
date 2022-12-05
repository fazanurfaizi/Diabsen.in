<template>
	<div
		class="whitespace-nowrap overflow-hidden hide-scrollbar"
		@mousedown="onMoveStart"
		@mouseup="onMoveEnd"
		@mouseleave="onMoveEnd"
		@touchstart="onMoveStart"
		@touchend="onMoveEnd"
		ref="tabPanelsRef"
		:key="modelValue"
	>
		<slot></slot>
	</div>
</template>

<script>
	import { debounce } from '@/core/utils'
	import {
		defineComponent,
		reactive,
		toRefs,
		onMounted,
		onUpdated,
		watch,
		onUnmounted,
	} from 'vue'

	export default defineComponent({
		name: 'v-tab-panles',
		props: {
			modelValue: {
				default: null,
				type: [String, Number],
			},
			animate: {
				default: false,
				type: Boolean,
			},
			swipeable: {
				default: false,
				type: Boolean,
			},
			threshold: {
				default: 50,
				type: Number,
			},
			responsive: {
				default: true,
				type: Boolean,
			},
		},
		emits: ['update:modelValue', 'on-animation-end'],
		setup(props, { emit, slots }) {
			const state = reactive({
				tabPanelsRef: null,
				start: false,
				startPosition: {
					x: 0,
					y: 0,
				},
				tabPanelOptions: [],
				previousModelValue: undefined,
			})

			const onWidthChange = debounce(() => {
				getTabPanelOptions()
				scrollToModelValue(props.modelValue, false)
			}, 10)

			const checkScrollEnd = (element, x, callback) => {
				if (!!element && Math.abs(element.scrollLeft - x) > 5) {
					window.requestAnimationFrame(() =>
						checkScrollEnd(element, x, callback)
					)
				} else {
					typeof callback === 'function' && callback()
				}
			}

			const scrollToModelValue = (modelValue, animate = true) => {
				const index = state.tabPanelOptions.findIndex(
					(option) => option.value === modelValue
				)
				const option = state.tabPanelOptions[index]

				if (option && state.tabPanelsRef) {
					if (state.previousModelValue !== undefined) {
						const previousOption = state.tabPanelOptions.find(
							(option) =>
								option.value === state.previousModelValue
						)
						if (previousOption) {
							state.tabPanelsRef.scrollTo({
								left: previousOption.left,
							})
						}
					}

					state.tabPanelsRef.scrollTo({
						left: option.left,
						behavior:
							props.animate && animate ? 'smooth' : undefined,
					})
					window.requestAnimationFrame(
						() => checkScrollEnd(state.tabPanelsRef, option.left),
						() => {
							const tabPanelsRef =
								state.tabPanelsRef?.children || []
							const removeTabPanelRefs = [...tabPanelsRef].filter(
								(_, i) => i !== index
							)
							removeTabPanelRefs.forEach((element) => {
								element.remove()
							})
							emit('on-animation-end', modelValue)
						}
					)
				}
			}

			const getTabPanelOptions = () => {
				if (slots.default && state.tabPanelsRef) {
					let vnodes = []
					const children = slots.default() || []
					if (children[0]?.type?.name === 'TabPanel') {
						vnodes = children
					} else {
						vnodes = children[0].children
					}

					const size = state.tabPanelsRef?.getBoundingClientRect()
					const width = size?.width || 0
					state.tabPanelOptions = vnodes.map((vnode, i) => {
						return {
							left: width * i,
							value:
								vnode.props != undefined
									? vnode.props.val
									: undefined,
						}
					})
				}
			}

			const activeTab = (tab) => {
				emit('update:modelValue', tab)
			}

			const getPosition = (event) => {
				if (event.type.includes('touch')) {
					const touch = event.changedTouches[0]
					return touch
						? {
								x: touch.clientX,
								y: touch.clientY,
						  }
						: undefined
				} else if (event.type.includes('mouse')) {
					return {
						x: event.clientX,
						y: event.clientY,
					}
				} else {
					return undefined
				}
			}

			const onMoveStart = (event) => {
				if (props.swipeable) {
					state.start = true
					const position = getPosition(event)
					if (!position) return
					state.startPosition.x = position.x
					state.startPosition.y = position.y
				}
			}

			const onMovedEnd = (event) => {
				if (state.start) {
					state.start = false
					const position = getPosition(event)
					if (!position) return
					const selectedIndex = state.tabPanelOptions.findIndex(
						(option) => option.value === props.modelValue
					)
					const dx = state.startPosition.x - position.x
					if (dx < -props.threshold) {
						if (selectedIndex > 0) {
							const tabPanelOption =
								state.tabPanelOptions[selectedIndex - 1]
							activeTab(tabPanelOption.value)
						}
					} else if (dx > props.threshold) {
						if (selectedIndex < state.tabPanelOptions.length - 1) {
							const tabPanelOption =
								state.tabPanelOptions[selectedIndex + 1]
							activeTab(tabPanelOption.value)
						}
					}
				}
			}

			onMounted(() => {
				getTabPanelOptions()
				scrollToModelValue(props.modelValue)
				if (props.responsive) {
					window.addEventListener('resize', onWidthChange)
				}
			})

			onUnmounted(() => {
				if (props.responsive) {
					window.removeEventListener('resize', onWidthChange)
				}
			})

			onUpdated(() => {
				getTabPanelOptions()
				scrollToModelValue(props.modelValue)
			})

			watch(
				() => props.modelValue,
				(newValue, oldValue) => {
					state.previousModelValue = oldValue
					scrollToModelValue(newValue)
				},
				{ immediate: true }
			)

			return {
				onMovedEnd,
				onMoveStart,
				...toRefs(state),
			}
		},
	})
</script>

<style scoped>
	.hide-scrollbar::-webkit-scrollbar {
		display: none;
	}
	.hide-scrollbar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
</style>
