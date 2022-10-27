<template>
    <div class="sm:flex sm:items-center justify-between px-1">
        <form class="flex justify-center items-center space-x-2">
            <label :for="id" class="text-base text-seconday">{{rowsPerPageText}}:</label>
            <select 
                v-model="currentPerPage" 
                :id="id" 
                @change="perPageChanged"
                aria-controls="datatable"
                class="bg-gray-50 border w-16 py-2 px-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
            >
                <option
                    v-for="(option, index) in rowsPerPage"
                    :key="index"
                    :value="option"
                >
                    {{option}}
                </option>
            </select>
            <span>entries</span>
        </form>
    </div>
</template>

<script setup>
import { defineComponent, defineProps, defineEmits, ref } from 'vue'

defineComponent({
    name: 'per-page'
})

defineProps({
    modelValue: {
        type: Number,
        default: 10
    },
    rowsPerPage: {
        type: Array,
        default: () => [10, 25, 50]
    },
    rowsPerPageText: {
        type: String,
        required: false,
        default: 'Show'
    }
})

const emits = defineEmits(['update:modelValue'])

const getId = () => `per-page-${Math.floor(Math.random() * Date.now())}`;

const id = getId()

const currentPerPage = ref(10)

const perPageChanged = (event) => {
    if(event) {
        emits('update:modelValue', parseInt(event.target.value))
    }
}
</script>