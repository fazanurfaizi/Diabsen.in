<template>
    <label 
        :for="id"
        class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]"
    >   
        {{ label }}
        <Asterisk v-if="required" />
    </label>
</template>

<script>
import Asterisk from "@/components/Asterisk.vue";
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'v-label',
    props: {
        id: {
            type: String,
            required: false
        },
        label: {
            type: String,
            required: true
        },
        required: {
            type: Boolean,
            required: false
        }
    },
    components: {
        Asterisk
    }
})
</script>