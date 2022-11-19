<template>
	<div class="flex h-screen overflow-hidden scrollbar-thin">
		<div
			class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden"
		>
            <div class="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 items-center bg-primary">
                <router-view v-slot="{ Component }">
                    <transition name="fade" mode="out-in">
                        <keep-alive>
                            <component :is="Component" />
                        </keep-alive>
                    </transition>
                </router-view>				
                <v-footer color-text="white" />
            </div>
		</div>
	</div>
</template>

<script>
import { defineComponent } from 'vue';
import VFooter from '@/components/layout/footer/index.vue';

export default defineComponent({
  name: 'AuthLayout',
  components: {
    VFooter
  },
})
</script>

<style scoped>
::-webkit-scrollbar-track {
	-webkit-box-shadow: inset 0 0 2px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}

::-webkit-scrollbar {
	width: 10px;
	background-color: #F5F5F5;
}

::-webkit-scrollbar-thumb {
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 2px rgba(0,0,0,.3);
	background-color: bg-gray-400;
}
</style>