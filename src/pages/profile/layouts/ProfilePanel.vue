<template>
    <div class="grid grid-cols-1 gap-5">
        <div class="flex flex-col items-center">
            <div
                class="max-w-xs h-24 w-24 mt-3 bg-secondary-light text-white text-3xl flex items-center justify-center font-bold rounded-full"
            >
                {{ profile }}
            </div>

        </div>        
        <div class="flex flex-col items-center text-gray-500">
            <span class="font-bold text-sm ">{{ user.name }}</span>
            <span class="text-xs font-normal">{{ user.role }}</span>
        </div>
        <slot></slot>
    </div>
</template>

<script>
import { computed, defineComponent } from 'vue';

export default defineComponent({
    name: 'profile-panel',
    props: {
        user: {
            type: Object,
            required: false
        }
    },
    setup(props) {
        const profile = computed(
            () => props.user.name.split(' ').map((name) => name[0]).join('')
        )

        return {
            profile
        }
    }
})
</script>

