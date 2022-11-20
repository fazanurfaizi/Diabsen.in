<template>
	<button
		:class="[
			classes,
			'inline-block font-medium border-2 leading-tight rounded focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out',
			{
				'shadow-md hover:shadow-lg focus:shadow-lg': !outline,
				'rounded-full': rounded,
				'px-1.5 py-1.5 text-base': size === 'xs',
				'px-4 py-2 text-base': size === 'sm',
				'px-6 py-2.5 text-base': size === 'md',
				'px-7 py-3.5 text-lg': size === 'lg',
				'not-allowed': disabled,
			},
		]"
		:disabled="disabled"
		:tabindex="1"
		:type="type"
		@click="handleClick"
	>
		<slot></slot>
	</button>
</template>

<script>
	import { computed, defineComponent } from 'vue'

	export default defineComponent({
		name: 'v-button',
		props: {
			/**
			 * Toggle the active state for the component.
			 */
			active: {
				type: Boolean,
				default: false,
				required: false,
			},
			/**
			 * Sets the variant context of the component to one of Tailwind’s themed colors.
			 *
			 * @values 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'
			 */
			variant: {
				type: String,
				default: 'primary',
				required: false,
				validator: (value) => {
					// The value must match one of these strings
					return [
						'primary',
						'secondary',
						'success',
						'danger',
						'warning',
						'info',
						'dark',
						'light',
						'link',
						'transparent',
					].includes(value)
				},
			},
			/**
			 * Toggle the disabled state for the component
			 */
			disabled: {
				type: Boolean,
				required: false,
			},
			/**
			 * The href attribute specifies the URL of the page link goes to
			 */
			href: {
				type: String,
				default: undefined,
				required: false,
			},
			/**
			 * Select the rounded of the component.
			 *
			 */
			rounded: {
				type: Boolean,
				required: false,
			},
			/**
			 * Size the component
			 *
			 * @values 'sm', 'md', 'lg
			 */
			size: {
				type: String,
				default: 'sm',
				required: false,
				validator: (value) => {
					// The value must match one of these strings
					return ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].includes(value)
				},
			},
			/**
			 * Specifies the type of button. Always specify the type attribute for the `<button>` element.
			 * Different browsers may use different default types for the `<button>` element.
			 *
			 * @values 'button', 'submit', 'reset'
			 */
			type: {
				type: String,
				default: 'button',
				required: false,
				validator: (value) => {
					return ['button', 'submit', 'reset'].includes(value)
				},
			},
			/**
			 * Set the button variant to an outlined button or a ghost button.
			 *
			 * @values 'fill', 'outline'
			 */
			outline: {
				type: Boolean,
				default: false,
				required: false,
			},
		},
		emits: ['click'],
		setup(props, { emit }) {
			const handleClick = (event) => {
				if (props.disabled) {
					return
				}

				emit('click', event)
			}

			const getClasses = () => {
				const variant = props.variant
				switch (variant) {
					case 'primary':
						return !props.outline
							? 'border-primary bg-primary text-white hover:bg-hover-primary focus:bg-focus-primary active:bg-active-primary'
							: 'border-primary text-primary hover:bg-gray-100'
					case 'secondary':
						return !props.outline
							? 'border-secondary bg-secondary text-white hover:bg-hover-secondary focus:bg-focus-secondary active:bg-active-secondary'
							: 'border-secondary text-secondary hover:bg-gray-100'
					case 'success':
						return !props.outline
							? 'border-success bg-success text-white hover:bg-hover-success focus:bg-focus-success active:bg-active-success'
							: 'border-success text-success hover:bg-gray-100'
					case 'danger':
						return !props.outline
							? 'border-danger bg-danger text-white hover:bg-hover-danger focus:bg-focus-danger active:bg-active-danger'
							: 'border-danger text-danger hover:bg-gray-100'
					case 'warning':
						return !props.outline
							? 'border-warning bg-warning text-white hover:bg-hover-warning focus:bg-focus-warning active:bg-active-warning'
							: 'border-warning text-warning hover:bg-gray-100'
					case 'info':
						return !props.outline
							? 'border-info bg-info text-white hover:bg-hover-info focus:bg-focus-info active:bg-active-info'
							: 'border-info text-info hover:bg-gray-100'
					case 'light':
						return !props.outline
							? 'border-light bg-light text-white hover:bg-hover-light focus:bg-focus-light active:bg-active-light'
							: 'border-light text-light hover:bg-gray-100'
					case 'dark':
						return !props.outline
							? 'border-dark bg-dark text-white hover:bg-hover-dark focus:bg-focus-dark active:bg-active-dark'
							: 'bg-dark border-dark text-dark hover:bg-gray-100'
					case 'link':
						return 'bg-link text-link hover:bg-hover-link focus:bg-focus-link active:bg-active-link'
				}
			}

			const classes = computed(() => getClasses())

			return {
				handleClick,
				classes,
			}
		},
	})
</script>
