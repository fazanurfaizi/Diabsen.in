<template>
    <div id="pagination-info">
        <div v-if="pageInfoCallback">
            {{ pageInfoCallback(infoParams) }}
        </div>
        <form v-else-if="mode === PAGINATION_MODES.Pages" @submit.prevent>
            <label :for="id" class="">
                <span>{{ pageText }}</span>
                <input 
                    type="text" 
                    name="page-search" 
                    :id="id"
                    aria-describedby="change-page-hint"
                    aria-controls="v-datatable"
                    class="footer__navigation__page-info__current-entry"
                    @keyup.enter.stop="changePage"
                    :value="currentPage"
                >
                <span>{{pageInfo}}</span>
            </label>
        </form>
        <div v-else class="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
            {{ recordInfo }}
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue'
import { PAGINATION_MODES } from '@/core/utils/constants'

const props = defineProps({
    currentPage: {
        type: Number,
        default: 1
    },
    lastPage: {
        type: Number,
        default: 1
    },
    totalRecords: {
        type: Number,
        default: 0
    },
    ofText: {
        type: String,
        default: 'of'
    },
    pageText: {
        type: String,
        default: 'page'
    },
    currentPerPage: {
        type: Number,
        default: 10
    },
    mode: {
        type: String,
        default: PAGINATION_MODES.Records
    },
    pageInfoCallback: {
        type: Function,
        required: false
    }
})

const emits = defineEmits(['page-changed'])

const getId = () => {
    return `pagination-page-input-${Math.floor(Math.random() * Date.now())}`
}

const id = getId()

const changePage = (event) => {
    const value = parseInt(event.target.value, 10)

    if(Number.isNaN(value) || value > props.lastPage || value < 1) {
        event.target.value = props.currentPage
        return false
    }

    event.target.value = value
    emits('page-changed', value)
}

const pageInfo = computed(() => `${props.ofText} ${props.lastPage}`)

const firstRecordOnPage = computed(() => ((props.currentPage - 1) * props.currentPerPage) + 1)

const lastRecordOnPage = computed(() => Math.min(props.totalRecords, props.currentPage * props.currentPerPage))

const recordInfo = computed(() => `Page ${props.currentPage} ${props.ofText} ${Math.ceil(props.totalRecords/props.currentPerPage)}`)

const infoParams = computed(() => {
    let first = firstRecordOnPage.value
    let last = lastRecordOnPage.value

    if(last === 0) {
        first = 0
    }
    
    return {
        firstRecordOnPage: first,
        lastRecordOnPage: last,
        totalRecords: props.totalRecords,
        currentPage: props.currentPage,
        totalPages: props.lastPage,   
    }
})
</script>