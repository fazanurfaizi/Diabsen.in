<template>
    <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
        <button 
            type="button" 
            class="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            aria-controls="datatable"
            @click.prevent.stop="moveToFirst"
        >
            <span class="sr-only">First</span>
            <Icon name="chevron-double-left" class="h-4 w-4" />
        </button>
        <button 
            type="button" 
            class="relative items-center border px-4 py-2 border-gray-300 bg-white text-gray-500 hover:bg-gray-50 text-sm font-medium focus:z-20 z-10 inline-flex"
            aria-controls="datatable"
            @click.prevent.stop="previousPage"
        >
            <span class="sr-only">Previous</span>
            <Icon name="chevron-left" class="h-4 w-4" />
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
                @click.prevent.stop="changePage(page.name)"
            >
                {{ page.name }}
            </button>
        </template>
        <!-- <span class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">...</span> -->

        <button 
            type="button" 
            class="relative items-center border px-4 py-2 border-gray-300 bg-white text-gray-500 hover:bg-gray-50 text-sm font-medium focus:z-20 z-10 inline-flex"
            aria-controls="datatable"
            @click.prevent.stop="nextPage" 
        >
            <span class="sr-only">Next</span>
            <Icon name="chevron-right" class="h-4 w-4" />
        </button>
        <button 
            type="button" 
            class="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            aria-controls="datatable"
            @click.prevent.stop="moveToLast" 
        >
            <span class="sr-only">Last</span>
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

const maxPage = computed(() => {
    if (props.totalRecords <= 0) {
        return 0;
    }

    let maxPage = Math.floor(props.totalRecords / props.currentPerPage);
    let mod = props.totalRecords % props.currentPerPage;
    
    if (mod > 0) {
        maxPage++;
    }
    return maxPage;
})

const pages = computed(() => {
    const range = []

    let max = Math.min(startPage.value + props.maxVisibleButtons - 1, props.totalRecords)

    for (let index = startPage.value; index <= max; index++) {
        if(index <= maxPage.value) {            
            range.push({
                name: index,
                isDisabled: index === props.modelValue
            })
        }
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

const changePage = (targetPage, emit = true) => {
    if(targetPage >= 1 && targetPage <= maxPage.value) {
        prevPage.value = targetPage - 1
        const page = currentPage.value = targetPage
        emits('update:modelValue', page)
        pageChanged(emit)
    }
}

const moveToFirst = () => {
    if(maxPage.value > 0 && currentPage.value > 1) {
        changePage(1)
    }
}

const nextPage = () => {
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

const moveToLast = () => {
    if(maxPage.value > 0 && currentPage.value <= maxPage.value) {
        changePage(maxPage.value)
    }
}

const isActive = (page) => {
    return page === currentPage.value
}
</script>