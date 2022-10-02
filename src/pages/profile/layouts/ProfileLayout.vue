<template>
    <div class="block md:flex">
        <div class="w-full md:w-3/12 h-screen p-4 sm:p-6 lg:p-4 bg-white rounded-2xl border">
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
                <nav>
                    <slot name="nav"></slot>
                </nav>
            </div>            
        </div>

        <div class="w-full md:w-9/12 p-8 h-fit bg-white lg:ml-4 rounded-2xl border">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
    name: 'ProfileLayout',    
    setup() {
        const store = useStore()

        const user = computed(
            () => store.getters['profile/getUser']
        )

        const profile = computed(
            () => user.value.name.split(' ').map((name) => name[0]).join('')
        )

        return {
            user,
            profile
        }
    }
})
</script>