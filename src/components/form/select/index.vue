<template>
	<select
		v-model="localValue"
		@change="handleChange"
		aria-label="Filter select"
		:required="required"
		class="bg-white appearance-none block w-full h-[44px] py-[10px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary sm:text-[14px]"
	>
		<option :value="null" selected>{{ label }}</option>

		<!-- Display options if options is a string referring to a top level array -->
		<template v-if="typeof options === 'string'">
			<option
				v-for="(option, index) in options"
				:key="`option-${index}`"
				:value="option"
				:id="`option-${index}`"
			>
				{{ option }}
			</option>
		</template>

		<!-- Display options if options is an array of options -->
		<template v-if="typeof options !== 'string' && options.length > 0">
			<option
				v-for="(option, index) in options"
				:key="`option-${index}`"
				:value="optionValue ? option[optionValue] : option"
				:id="`option-${index}`"
			>
				{{ option[optionLabel] ?? option }}
			</option>
		</template>
	</select>
</template>

<script>
	import { computed, defineComponent } from 'vue'

	export default defineComponent({
		name: 'v-select',
		props: {
			modelValue: {
				required: true,
			},
			readonly: {
				type: Boolean,
				required: false,
			},
			required: {
				type: Boolean,
				required: false,
			},
			options: {
				type: Array,
			},
			optionLabel: {
				type: String,
				required: false,
				default: 'text',
			},
			optionValue: {
				type: String,
				required: false,
				default: 'value',
			},
			label: {
				type: String,
			},
		},
		emits: ['change', 'update:modelValue'],
		setup(props, { emit }) {
			const localValue = computed({
				get() {
					return props.modelValue
				},
				set(newValue) {
					emit('update:modelValue', newValue)
				},
			})

			let handleChange = () => {
				emit('change')
			}

			return {
				localValue,
				handleChange,
			}
		},
	})
</script>
