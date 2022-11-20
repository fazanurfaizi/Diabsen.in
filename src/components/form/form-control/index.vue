<template>
	<div :class="{ error: model.$errors.length }">
		<slot></slot>
		<div
			class="input-errors"
			v-for="error of model.$errors"
			:key="error.$uid"
		>
			<span class="error-msg">{{ error.$message }}</span>
		</div>
	</div>
</template>

<script>
	import { defineComponent } from 'vue'

	export default defineComponent({
		name: 'v-form-control',
		props: {
			model: {
				type: Object,
			},
		},
	})
</script>
