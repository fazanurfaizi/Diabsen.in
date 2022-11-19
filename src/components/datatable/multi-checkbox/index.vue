<template>
	<div
		class="checkbox"
		@click.stop.prevent="toggleChecked"
	>
		<input
			type="checkbox"
			:checked="isChecked"
			:class="status"
		/>
		<label for="checkbox" />
	</div>
</template>

<script setup>
import { defineComponent, defineProps, defineEmits, computed } from 'vue'

defineComponent({
	name: 'v-multi-checkbox'
})

const props = defineProps({
	status: {
		type: String,
		required: true,
		validator: (value) => {
			return ['noneSelected', 'partSelected', 'allSelected'].includes(value);
		}
	}
})

const emits = defineEmits(['change'])

const isChecked = computed(() => props.status === 'allSelected')

const toggleChecked = () => {
	emits('change', !isChecked.value)
}

</script>

<style scoped>
:root {
	--checkbox-border-color: rgba(0, 0, 0, 0.54);
	--checkbox-size: 1.3em;
	--checkbox-margin: 1em 0;
	--checkbox-padding: .2em;
	--checkbox-border-width: 1px;
	--checkbox-border-radius: 0.125em;
	--checkbox-label-padding: .6em;

	--checkmark-width: 0.13em;
	--checkmark-color: #fff;

	--line-width: 0.125em;
	--line-color: #fff;
}

.checkbox {
	position: relative;
	width: 1.3em;
	height: 1.3em;
	font-size: 1.4em;
	margin: 0 auto;
}

.checkbox label {
	cursor: pointer;
	display: inline;
	line-height: 1.3em;
	vertical-align: top;
	clear: both;
}

.checkbox label:before, .checkbox label:after {
	content: "";
	position: absolute;
	left: 0;
	top: 0;
}

.checkbox label:before {
	width: 1.3em;
	height: 1.3em;
	background: #fff;
	border: 1px solid rgba(0, 0, 0, 0.54);
	border-radius: 0.125em;
	cursor: pointer;
	transition: background 0.3s;
}

.checkbox input[type="checkbox"] {
	outline: 0;
	visibility: hidden;
	width: 1.3em;
	margin: 0;
	display: block;
	float: left;
	font-size: inherit;
}

.checkbox input[type="checkbox"]:checked + label:before {
	border: none;
}

.checkbox input[type="checkbox"]:checked + label:after {
	transform: translate(0.2em, calc(var(--checkbox-size) / 2) - calc(var(--checkmark-size) / 2.6)) rotate(-45deg);
	width: 0.9em;
	height: calc(var(--checkmark-size) / 2);
	border: 0.13em solid #fff;
	border-top-style: none;
	border-right-style: none;
}

.checkbox input[type="checkbox"].allSelected + label:before {
	border: none;
}

.checkbox input[type="checkbox"].allSelected + label:after {
	transform: translate(0.2em, calc(var(--checkbox-size) / 2) - calc(var(--checkmark-size) / 2.6)) rotate(-45deg);
	width: 0.9em;
	height: calc(var(--checkmark-size) / 2);
	border: 0.13em solid #fff;
	border-top-style: none;
	border-right-style: none;
}

.checkbox input[type="checkbox"].partSelected + label:before {
	border: none;
}

.checkbox input[type="checkbox"].partSelected + label:after {
	transform: translate(0.2em, calc(var(--checkbox-size) / 2) - calc(var(--line-width) / 2));
	width: 0.9em;
	height: calc(var(--line-size) / 2);
	border: 0.125em solid #fff;
	border-bottom-style: none;
	border-right-style: none;
	border-left-style: none;
}

*, *:before, *:after {
	box-sizing: border-box;
}

.checkbox input[type="checkbox"].allSelected + label:before, .checkbox input[type="checkbox"].partSelected + label:before {
	background: @apply bg-primary;
}
</style>
