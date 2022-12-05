<template>
	<button class="rounded" :class="[getAction, getColor]">
		<slot>Button</slot>
	</button>
</template>

<script>
	export default {
		name: 'TheButton',
		props: {
			action: Boolean,
			setColor: {
				type: String,
				default: 'primary',
			},
			outline: Boolean,
		},
		computed: {
			getAction() {
				return this.action ? 'py-1 px-1' : 'py-2 px-4'
			},
			getColor() {
				let result
				switch (this.setColor) {
					case 'primary':
						result = 'btn-primary'
						break
					case 'warning':
						result = 'btn-warning'
						break
					case 'error':
						result = 'btn-error'
						break
					default:
						result = 'btn-primary'
						break
				}

				if (this.outline) {
					result = 'text-' + result + ' border-2 border-' + result
				} else {
					result = 'text-white bg-' + result
				}
				// console.log(result);
				return result
			},
		},
	}
</script>
