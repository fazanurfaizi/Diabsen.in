<template>
	<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md sm:my-auto">
		<div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
			<form class="space-y-2" action="#" method="POST">
				<div class="mt-1">
					<input
						placeholder="Email Address"
						id="email"
						name="email"
						type="email"
						required
						class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
					/>
				</div>

				<Vbutton type="submit" variant="secondary" class="w-full">
					Reset Password
				</Vbutton>

				<div class="grid place-content-center">
					<div class="text-sm">
						<router-link
							:to="{ name: 'login' }"
							class="font-medium text-primary"
						>
							Kembali
						</router-link>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script setup>
	import { defineComponent } from 'vue'
	import Vbutton from '@/components/ui/button/index.vue'

	defineComponent({
		name: 'forgot-password-page',
		components: {
			Vbutton,
		},
	})
</script>
