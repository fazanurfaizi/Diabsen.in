<template>
    <div class="block md:flex">
        <div class="w-full md:w-3/12 h-screen p-4 sm:p-6 lg:p-4 bg-white rounded-2xl border-2">
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
                    <ul class="flex flex-col w-full gap-2">
                        <li class="my-px">
                            <Link                     
                                title="Profile Saya"
                                path="profile-edit"
                                icon="user-circle"                    
                            />
                        </li>
                        <li class="my-px">
                            <Link                     
                                title="Ubah Kata Sandi"
                                path="profile-change-password"
                                icon="key"                    
                            />
                        </li>
                    </ul>
                </nav>
            </div>            
        </div>

        <div class="w-full md:w-9/12 p-8 h-fit bg-white lg:ml-4 rounded-2xl border-2">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { computed, defineComponent } from 'vue';
import Link from '@/components/ui/link/index.vue'
import { useStore } from 'vuex';

export default defineComponent({
    name: 'ProfileLayout',
    components: {
        Link
    },
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