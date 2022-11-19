<template>
<button
		v-for="(pagination, index) in paginationItemsForRender"
		:key="index"
		type="button"
		class="relative items-center border px-4 py-2 border-gray-300 bg-white text-gray-500 hover:bg-gray-50 text-sm"
		:class="[
			pagination.active && 'border-indigo-500 bg-indigo-50 text-indigo-600'
		]"
		@click.prevent="changePage(pagination)"
	>
		{{ pagination.type === 'button' ? pagination.page : '...' }}
	</button>
</template>

<script setup>
import { defineComponent, defineProps, defineEmits, computed } from 'vue'

defineComponent({
    name: 'v-pagination-buttons'
})

const props = defineProps({
    maxPaginationNumber: {
		type: Number,
		required: true
	},
	currentPaginationNumber: {
		type: Number,
		required: true
	},
	totalVisible: {
		type: Number,
		required: false,
		default: 7
	}
})

const emits = defineEmits(['updatePage'])

const changePage = (item) => {
	if(item.type === 'button' && !item.active)
		emits('updatePage', item.page)
}

const paginationItemsForRender = computed(() => {
	const paginationItems = [];
	if (props.maxPaginationNumber <= props.totalVisible) {
		// x,x,x,x
		for (let i = 1; i <= props.maxPaginationNumber; i += 1) {
			paginationItems.push({
				type: 'button',
				page: i,
				active: i === props.currentPaginationNumber,
				activePrev: (i + 1) === props.currentPaginationNumber,
			});
		}
	} else if ([1, 2, props.maxPaginationNumber, props.maxPaginationNumber - 1].includes(props.currentPaginationNumber)) {
		// x,x,x,...,x,x,x
		for (let i = 1; i <= props.totalVisible; i += 1) {
			if (i <= 3) {
				paginationItems.push({
					type: 'button',
					page: i,
					active: i === props.currentPaginationNumber,
					activePrev: (i + 1) === props.currentPaginationNumber,
				});
			} else if (i === 4) {
				paginationItems.push({
					type: 'omission',
				});
			} else {
				const page = props.maxPaginationNumber - (props.totalVisible - i);
				paginationItems.push({
					type: 'button',
					page,
					active: page === props.currentPaginationNumber,
					activePrev: (page + 1) === props.currentPaginationNumber,
				});
			}
		}
	} else if ([3, 4].includes(props.currentPaginationNumber)) {
		// x,x,x,x,x,...,x
		for (let i = 1; i <= props.totalVisible; i += 1) {
			if (i <= 5) {
				paginationItems.push({
					type: 'button',
					page: i,
					active: i === props.currentPaginationNumber,
					activePrev: (i + 1) === props.currentPaginationNumber,
				});
			} else if (i === 6) {
				paginationItems.push({
					type: 'omission',
				});
			} else {
				paginationItems.push({
					type: 'button',
					page: props.maxPaginationNumber,
					active: props.maxPaginationNumber === props.currentPaginationNumber,
					activePrev: (i + 1) === props.currentPaginationNumber,
				});
			}
		}
	} else if ([props.maxPaginationNumber - 2, props.maxPaginationNumber - 3].includes(props.currentPaginationNumber)) {
		// x,...,x,x,x,x,x
		for (let i = 1; i <= props.totalVisible; i += 1) {
			if (i === 1) {
				paginationItems.push({
					type: 'button',
					page: 1,
					active: props.currentPaginationNumber === 1,
					activePrev: (i + 1) === props.currentPaginationNumber,
				});
			} else if (i === 2) {
				paginationItems.push({
					type: 'omission',
				});
			} else {
				const page = props.maxPaginationNumber - (props.totalVisible - i);
				paginationItems.push({
					type: 'button',
					page,
					active: page === props.currentPaginationNumber,
					activePrev: (page + 1) === props.currentPaginationNumber,
				});
			}
		}
	} else {
		// x,...,x,x,x,...,x
		for (let i = 1; i <= props.totalVisible; i += 1) {
			if (i === 1) {
				paginationItems.push({
					type: 'button',
					page: 1,
					active: props.currentPaginationNumber === 1,
					activePrev: (i + 1) === props.currentPaginationNumber,
				});
			} else if (i === 2 || i === 6) {
				paginationItems.push({
					type: 'omission',
				});
			} else if (i === 7) {
				paginationItems.push({
					type: 'button',
					page: props.maxPaginationNumber,
					active: props.maxPaginationNumber === props.currentPaginationNumber,
					activePrev: (i + 1) === props.currentPaginationNumber,
				});
			} else {
				const diff = 4 - i;
				const page = props.currentPaginationNumber - diff;
				paginationItems.push({
					type: 'button',
					page,
					active: page === props.currentPaginationNumber,
					activePrev: (page + 1) === props.currentPaginationNumber,
				});
			}
		}
	}
	return paginationItems;
});

</script>
