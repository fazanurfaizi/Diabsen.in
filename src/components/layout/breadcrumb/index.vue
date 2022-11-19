<template>
    <div>
        <nav class="flex" aria-label="Breadcrumb">
            <ol role="list" class="flex items-center">
                <li>
                    <div class="flex items-center">
                    <Icon name="home" class="h-5 w-5 text-gray-400" />
                    <div class="px-2 text-sm font-medium text-gray-500">Beranda</div>
                    </div>
                </li>

                <template v-for="(match, index) in matches" :key="index">
                    <li>
                        <div class="flex items-center">
                            <Icon name="chevron-right" class="h-5 w-5 text-gray-400" />
                            <a 
                                href="#" 
                                class="px-2 text-sm font-medium text-gray-500"
                                :class="index === matches.length - 1 && 'text-secondary'"
                            >
                                {{ match.meta.breadCrumb }}
                            </a>
                        </div>
                    </li>
                </template>
            </ol>
        </nav>
    </div>
</template>
  
<script>
import { computed, defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'v-breadcrumb',
    setup() {
        const router = useRouter()        

        const matches = computed(
            () => router.currentRoute.value.matched.filter((match) => match.meta.breadCrumb)
        )

        return {
            matches
        }
    }
})
</script>