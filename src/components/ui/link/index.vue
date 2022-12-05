<template>
	<router-link
		v-slot="{ href, navigate, isActive, isExactActive }"
		:to="{ name: path, params: params }"
		custom
	>
		<a
			class="block text-gray-700 hover:text-gray-500 p-1.5 px-3 py-2 rounded-lg truncate transition duration-150"
			:class="{
				'active-link': isActive,
				'exact-active-link': isExactActive,
			}"
			:href="href"
			@click="navigate"
		>
			<div class="flex items-center pl-1">
				<Icon
					:name="icon"
					class="shrink-0 h-6 w-6 text-primary"
					:class="isExactActive && '!text-white'"
				/>
				<span
					class="hidden sidebar-expanded:block text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
				>
					{{ title }}
				</span>
			</div>
		</a>
	</router-link>
</template>

<script>
	import { defineComponent } from 'vue'
	import Icon from '@/components/ui/svg-icon/index.vue'

	export default defineComponent({
		name: 'v-link',
		components: {
			Icon,
		},
		props: {
			title: {
				type: String,
				required: true,
			},
			path: {
				type: String,
				required: true,
			},
			params: {
				type: Object,
				required: false,
			},
			icon: {
				type: String,
				required: true,
			},
			iconSet: {
				type: String,
				default: 'outline',
			},
		},
	})
</script>
