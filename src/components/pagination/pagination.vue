<template>
    <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
        <button 
            type="button" 
            class="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            aria-controls="datatable"
            @click.prevent.stop="previousPage"
        >
            <span class="sr-only">Previous</span>
            <Icon name="chevron-double-left" class="h-4 w-4" />
        </button>

        <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
        <!-- aria-current="page" -->
        <template v-if="showPagesNumber">
            <button
                v-for="page in pages" :key="page.name"
                type="button" 
                class="relative items-center border px-4 py-2 border-gray-300 bg-white text-gray-500 hover:bg-gray-50 text-sm font-medium focus:z-20 z-10 inline-flex"
                :class="[
                    isActive(page.name) && 'border-indigo-500 bg-indigo-50 text-indigo-600'
                ]"
            >
                {{ page.name }}
            </button>
        </template>
        <!-- <span class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">...</span> -->

        <button 
            type="button" 
            class="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            aria-controls="datatable"
            @click.prevent.stop="nextPage" 
        >
            <span class="sr-only">Previous</span>
            <Icon name="chevron-double-right" class="h-4 w-4" />
        </button>
    </nav>
</template>

<script setup>
import { defineComponent, defineProps, defineEmits, ref, computed } from 'vue'
import Icon from '@/components/Icon.vue'

defineComponent({
    name: 'v-pagination',
    components: {
        Icon
    }
})

const props = defineProps({
    modelValue: {
        type: Number,
        default: 1
    },
    totalRecords: {
        type: Number,
        default: 0
    },
    currentPerPage: {
        type: Number,
        default: 10
    },
    maxVisibleButtons: {
        type: Number,
        default: 3
    },
    showPagesNumber: {
        type: Boolean,
        default: true,
        required: false
    }
})

const emits = defineEmits(['page-changed', 'update:modelValue'])

const currentPage = ref(1)

const prevPage = ref(0)

const pagesCount = computed(() => {
    const quotient = Math.floor(props.totalRecords / props.currentPerPage)
    const remainder = props.totalRecords % props.currentPerPage

    return remainder === 0 ? quotient : quotient + 1
})

const nextIsPossible = computed(() => props.modelValue < pagesCount.value)

const prevIsPossible = computed(() => props.modelValue > 1)

const startPage = computed(() => {
    if(props.modelValue === 1) {
        return 1
    }

    if(props.modelValue === props.totalRecords) {
        return props.totalRecords - props.maxVisibleButtons
    }

    return props.modelValue - 1
})

const pages = computed(() => {
    const range = []

    for (let index = startPage.value; index < Math.min(startPage.value + props.maxVisibleButtons -1, props.totalRecords); index++) {
        range.push({
            name: index,
            isDisabled: index === props.modelValue
        })
    }

    return range
})

const pageChanged = (emit = true) => {
    const payload = {
        currentPage: props.modelValue,
        prevPage: prevPage.value
    }

    if(!emit)
        payload.noEmit = true

    emits('page-changed', payload)
}

// const changePage = (page, emit = true) => {
//     if(page> 0 && props.total > props.currentPerPage * (page - 1)) {
//         prevPage.value = currentPage.value
//         currentPage.value = page
//         pageChanged(emit)
//     }
// }

const nextPage = () => {
    console.log('test')
    if(nextIsPossible.value) {
        prevPage.value = props.modelValue
        const page = ++currentPage.value
        emits('update:modelValue', page)
        pageChanged()
    }
}

const previousPage = () => {
    if(prevIsPossible.value) {
        prevPage.value = props.modelValue
        const page = --currentPage.value
        emits('update:modelValue', page)
        pageChanged()
    }
}

const isActive = (page) => {
    return page === currentPage.value
}
</script>