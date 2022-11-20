<template>
	<div class="relative">
		<label :for="searchText" class="hidden">{{ searchText }}</label>
		<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
			<Icon name="search" class="h-3.5 w-4 stroke-primary"></Icon>
		</div>
		<input
			v-model="searchComputed"
			@keyup.enter="handleSetSearch"
			class="h-10 py-3 pl-9 pr-2 mr-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
			:placeholder="placeholder"
			type="search"
		>
		<button
			v-if="!isNullable(searchComputed)"
			class="absolute inset-y-0 right-5 flex items-center pl-3"
			@click="handleClearSearch"
		>
			<Icon name="x" class="h-3.5 w-4 stroke-red-500"></Icon>
		</button>
	</div>
	<div v-if="hasSubmitButton" class="mr-3">
		<VButton size="sm" @click="handleSetSearch">{{ searchButtonText }}</VButton>
	</div>
</template>

<script>
export default {
	name: 'v-search-filter',
	inheritAttrs: false,
	customOptions: {}
}
</script>

<script setup>
import { defineProps, defineEmits, computed } from 'vue'
import Icon from '@/components/Icon.vue'
import { isNullable } from '@/core/utils'
import VButton from '@/components/ui/button/index.vue'

const props = defineProps({
    searchText: {
        type: String,
        default: 'search',
        required: false
    },
    placeholder: {
        type: String,
        default: 'search',
        required: false
    },
    searchButtonText: {
        type: String,
        default: 'search',
        required: false
    },
    modelValue: {
		type: String,
		required: true
	},
	hasSubmitButton: {
		type: Boolean,
		required: false,
		default: false
	}
})

const emits = defineEmits(['update:modelValue'])

const searchComputed = computed({
	get: () => props.modelValue,
	set: (value) => {
		emits('update:modelValue', value)
	}
})

const handleSetSearch = (event) => {
	if(event.target.value) {
		emits('update:modelValue', event.target.value)
	}
}

const handleClearSearch = () => {
	emits('update:modelValue', '')
}

</script>
