<template>
	<div
		class="text-sm font-medium text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700"
	>
		<ul class="flex flex-wrap my-[16px] text-center">
			<template v-for="(item, index) in column" :key="index">
				<li @click="moveTab(item.key)" class="mr-4">
					<a
						href="#"
						:class="
							item.isActive
								? 'text-color-tabs-active border-color-tabs-active'
								: 'text-color-tabs border-b-2 border-color-tabs'
						"
						class="inline-block border-b-2 px-4 rounded-t-lg"
						>{{ item.name }}</a
					>
				</li>
			</template>
		</ul>
		<slot name="content" />
	</div>
</template>

<script>
	export default {
		name: 'TheTabs',
		data() {
			return {
				columnTitle: this.column,
			}
		},
		props: {
			column: Array,
		},
		methods: {
			moveTab(key) {
				this.columnTitle.map((item) => {
					if (item.key === key) {
						item.isActive = true
					} else {
						item.isActive = false
					}
					return item
				})
				this.$emit('columnUpdate', this.columnTitle)
			},
		},
	}
</script>
