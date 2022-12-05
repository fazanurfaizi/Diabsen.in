<template>
	<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md sm:my-auto">
		<div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
			<form class="space-y-2" action="#" method="POST">
				<div class="mt-1">
					<input
						placeholder="Password"
						id="password"
						name="password"
						type="password"
						required
						class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
					/>
				</div>

				<div class="mt-1">
					<input
						placeholder="Konfirmasi Password"
						id="confirm-password"
						name="confirm_password"
						type="password"
						required
						class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
					/>
				</div>

				<button
					type="submit"
					class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secodary-dark"
				>
					Update Password
				</button>

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

<script>
	import { defineComponent } from 'vue'

	export default defineComponent({
		name: 'reset-password-page',
	})
</script>
