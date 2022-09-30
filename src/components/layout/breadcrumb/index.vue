<template>
    <div>
        <nav class="flex" aria-label="Breadcrumb">
            <ol role="list" class="flex items-center space-x-4">
                <li>
                    <div class="flex items-center">
                        <Icon name="home" class="h-5 w-5 text-gray-400" />
                        <div class="ml-4 text-sm font-medium text-gray-500">Beranda</div>
                    </div>
                </li>
    
                <li>
                    <div class="flex items-center">
                        <Icon name="chevron-right" class="h-5 w-5 text-gray-400" />
                        <a href="#" class="ml-4 text-sm font-medium text-secondary hover:text-gray-700">Profile</a>
                    </div>
                </li>
            </ol>
        </nav>
    </div>
</template>
  
<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'v-breadcrumb'
})
</script>