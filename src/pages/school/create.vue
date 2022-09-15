<template>
    <layout>
        <BaseContent>
            <template #title>Tambah Sekolah</template>
            <template #content>
                <div v-if="step === 1" id="step-1">
                    <p>Step1</p>
                    test1
                </div>
                <div v-if="step === 2" id="step-2">
                    <p>Step2</p>
                    test2
                </div>
                <div v-if="step === 3" id="step-3">
                    <p>Step3</p>
                    test3
                </div>
                <button @click.prevent="previousPage()">Previous</button>
                <button @click.prevent="nextPage()">Next</button>
            </template>
        </BaseContent>
    </layout>
</template>
<script>
import BaseContent from '@/layouts/BaseContent.vue';

export default {
    name: "SchoolCreate",
    components: {
        BaseContent,
    },
    data() {
        return {
            step: 1,
            total_page: 3
        }
    },
    methods: {
        nextPage() {    
            if (this.step !== this.total_page) {
                this.step++;
            }
        },
        previousPage() {
            if (this.step > 1) {
                this.step--;
            }
        }
    },

}
</script>