<template>
	<input
		:id="id"
		:name="name"
		:type="type"
		ref="inputRef"
		v-model="localValue"
		:placeholder="placeholder"
		:required="required"
		:min="min"
		:max="max"
		:minlength="minlength"
		:maxlength="maxlength"
		:autocomplete="autocomplete"
		:autofocus="autofocus"
		:disabled="disabled"
		:readonly="readonly"
		@input="handleInput"
		@change="handleChange"
		@focus="handleFocus"
		@blur="handleBlur"
		@keyup.esc.exact="handleEscape"
		class="appearance-none block w-full h-10 py-2 px-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm"
		:class="[
			readonly ? 'bg-gray-100' : 'bg-clip-padding',
			error
				? 'border border-red-600'
				: 'focus:ring-secondary focus:border-secondary',
		]"
	/>
</template>

<script>
	import { defineComponent, computed, ref, onMounted, onUpdated } from 'vue'

	export default defineComponent({
		name: 'v-input',
		props: {
			type: {
				type: String,
				required: false,
				default: 'text',
				validator: (value) => {
					return [
						'text',
						'number',
						'url',
						'email',
						'password',
						'date',
						'search',
					].includes(value)
				},
			},
			modelValue: {
				type: [String, Number],
				required: false,
				default: null,
			},
			id: {
				type: String,
				required: false,
				default: null,
			},
			name: {
				type: String,
				required: false,
				default: null,
			},
			placeholder: {
				type: String,
				required: false,
				default: '',
			},
			required: {
				type: Boolean,
				required: false,
				default: false,
			},
			min: {
				type: [String, Number],
				required: false,
				default: null,
			},
			max: {
				type: [String, Number],
				required: false,
				default: null,
			},
			minlength: {
				type: [String, Number],
				required: false,
				default: 0,
			},
			maxlength: {
				type: [String, Number],
				required: false,
				default: 255,
			},
			autocomplete: {
				type: String,
				required: false,
				default: 'off',
			},
			autofocus: {
				type: String,
				required: false,
				default: 'off',
			},
			disabled: {
				type: Boolean,
				required: false,
				default: null,
			},
			readonly: {
				type: Boolean,
				required: false,
				default: null,
			},
			error: {
				type: Boolean,
				required: false,
				default: false,
			},
		},
		emits: [
			'input',
			'change',
			'focus',
			'blur',
			'escape',
			'update:modelValue',
		],
		setup(props, { emit }) {
			const handleInput = (event) => {
				emit('input', event)
				emit('update:modelValue', event.target.value)
			}

			const handleChange = (event) => {
				emit('change', event)
				emit('update:modelValue', event.target.value)
			}

			const handleFocus = (event) => {
				emit('focus', event)
			}

			const handleBlur = (event) => {
				emit('blur', event)
			}

			const inputRef = ref(null)

			const handleEscape = (event) => {
				inputRef.value.blur()
				emit('escape', event)
			}

			onMounted(() => {
				if (props.autofocus) inputRef.value.focus()
			})

			onUpdated(() => {
				if (props.autofocus) inputRef.value.focus()
			})

			const localValue = computed({
				get() {
					return props.modelValue
				},
				set(newValue) {
					emit('update:modelValue', newValue)
				},
			})

			return {
				localValue,
				handleInput,
				handleChange,
				handleFocus,
				handleBlur,
				inputRef,
				handleEscape,
			}
		},
	})
</script>
