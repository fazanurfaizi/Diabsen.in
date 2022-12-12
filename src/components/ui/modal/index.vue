<template>
	<teleport to="body">
		<transition
			enter-active-class="transition ease-out duration-200 transform"
			enter-from-class="opacity-0"
			enter-to-class="opacity-100"
			leave-active-class="transition ease-in duration-200 transform"
			leave-from-class="opacity-100"
			leave-to-class="opacity-0"
		>
			<div
				v-show="showModal"
				ref="modal-backdrop"
				class="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-50"
			>
				<div
					class="flex items-start justify-center min-h-screen pt-24 text-center"
				>
					<transition
						enter-active-class="transition ease-out duration-300 transform "
						enter-from-class="opacity-0 translate-y-10 scale-95"
						enter-to-class="opacity-100 translate-y-0 scale-100"
						leave-active-class="ease-in duration-200"
						leave-from-class="opacity-100 translate-y-0 scale-100"
						leave-to-class="opacity-0 translate-y-10 translate-y-0 scale-95"
					>
						<div
							class="relative bg-white rounded-lg text-left overflow-hidden shadow-xl p-8 w-1/2"
							role="dialog"
							ref="modal"
							aria-modal="true"
							aria-labelledby="modal-headline"
							v-show="showModal"
						>
							<button
								class="absolute top-4 right-4"
								@click="closeModal"
							>
								<Icon
									name="close"
									class="flex shrink-0 h-6 w-6 text-primary"
								/>
							</button>
							<slot>I'm empty inside</slot>
						</div>
					</transition>
				</div>
			</div>
		</transition>
	</teleport>
</template>

<script>
	import { defineComponent, ref, watch } from 'vue'
	import Icon from '@/components/ui/svg-icon/index.vue'
	import useClickOutside from '@/hooks/useClickOutside'

	export default defineComponent({
		name: 'v-modal',
		components: {
			Icon,
		},
		props: {
			show: {
				type: Boolean,
				default: false,
			},
		},
		setup(props) {
			const showModal = ref(false)
			const modal = ref(null)
			const { onClickOutside } = useClickOutside()

			watch(
				() => props.show,
				(show) => {
					showModal.value = show
				}
			)

			const closeModal = () => {
				showModal.value = !showModal.value
			}

			onClickOutside(modal, () => {
				if (showModal.value) closeModal()
			})

			return {
				modal,
				showModal,
				closeModal,
			}
		},
	})
</script>
