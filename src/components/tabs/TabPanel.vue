<template>
	<div class="w-full inline-block align-top" style="white-space: initial;">
		<slot></slot>
	</div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'v-tab-panel'
})
</script>
