<template>
	<nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
		<div class="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
			Page {{ currentPaginationNumber }} of {{ maxPaginationNumber }}
		</div>
		<button
			type="button"
			aria-controls="datatable"
			@click="emits('clickFirstPage')"
			class="relative items-center border px-4 py-2 border-gray-300 bg-white text-gray-500 hover:bg-gray-50 text-sm font-medium focus:z-20 z-10 inline-flex"
		>
			<!-- :class="{'bg-indigo-50 border-indigo-500 text-indigo-600': isFirstPage}" -->
			<span class="sr-only">{{ previousButtonText }}</span>
			<Icon name="chevron-double-left" class="h-4 w-4" />
		</button>
		<button
			type="button"
			aria-controls="datatable"
			@click="emits('clickPrevPage')"
			class="relative items-center border px-4 py-2 border-gray-300 bg-white text-gray-500 hover:bg-gray-50 text-sm font-medium focus:z-20 z-10 inline-flex"
		>
			<!-- :class="{'bg-indigo-50 border-indigo-500 text-indigo-600': isFirstPage}" -->
			<span class="sr-only">{{ previousButtonText }}</span>
			<Icon name="chevron-left" class="h-4 w-4" />
		</button>

		<!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
		<!-- aria-current="page" -->
		<slot
			v-if="slots.paginationButtons"
			name="paginationButtons"
		></slot>

		<!-- <span class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">...</span> -->

		<button
			type="button"
			aria-controls="datatable"
			@click="emits('clickNextPage')"
			class="relative items-center border px-4 py-2 border-gray-300 bg-white text-gray-500 hover:bg-gray-50 text-sm font-medium focus:z-20 z-10 inline-flex"
		>
			<!-- :class="{'bg-indigo-50 border-indigo-500 text-indigo-600': isLastPage}" -->
			<span class="sr-only">{{ nextButtonText }}</span>
			<Icon name="chevron-right" class="h-4 w-4" />
		</button>
		<button
			type="button"
			aria-controls="datatable"
			@click="emits('clickLastPage')"
			class="relative items-center border px-4 py-2 border-gray-300 bg-white text-gray-500 hover:bg-gray-50 text-sm font-medium focus:z-20 z-10 inline-flex"
		>
			<!-- :class="{'bg-indigo-50 border-indigo-500 text-indigo-600': isLastPage}" -->
			<span class="sr-only">{{ nextButtonText }}</span>
			<Icon name="chevron-double-right" class="h-4 w-4" />
		</button>
	</nav>
</template>

<script>
export default {
	name: 'v-pagination-arrows',
	inheritAttrs: false,
	customOptions: {}
}
</script>

<script setup>
import { defineProps, defineEmits, useSlots } from 'vue';
import Icon from '@/components/Icon.vue'

defineProps({
	maxPaginationNumber: {
		type: Number,
		required: true
	},
	currentPaginationNumber: {
		type: Number,
		required: true
	},
	previousButtonText: {
        type: String,
        default: 'Previous',
        required: false
    },
    nextButtonText: {
        type: String,
        default: 'Next',
        required: false
    },
	isFirstPage: {
		type: Boolean,
		required: false
	},
	isLastPage: {
		type: Boolean,
		required: false
	}
})

const emits = defineEmits(['clickPrevPage', 'clickNextPage', 'clickFirstPage', 'clickLastPage'])

const slots = useSlots()

</script>
