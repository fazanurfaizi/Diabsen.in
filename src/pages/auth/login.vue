<template>
	<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md sm:my-auto">
		<div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
			<form class="space-y-2">
				<div>
					<div class="mt-1">
						<input
							v-model="form.email"
							placeholder="Email"
							id="email"
							name="email"
							type="email"
							autocomplete="email"
							required
							class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
						/>
					</div>
				</div>

				<div>
					<div class="mt-1 relative">
						<input
							v-model="form.password"
							placeholder="Password"
							id="password"
							name="password"
							:type="isShowPassword ? 'text' : 'password'"
							autocomplete="current-password"
							required
							class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
						/>
						<Icon
							@click="isShowPassword = !isShowPassword"
							:name="isShowPassword ? 'eye' : 'eye-off'"
							class="h-5 w-5 absolute right-2 top-2 cursor-pointer"
						/>
					</div>
				</div>

				<div>
					<Vbutton
						@click.prevent="handleLogin()"
						type="submit"
						variant="secondary"
						size="sm"
						class="w-full"
					>
						Sign in
					</Vbutton>
				</div>

				<div class="grid place-content-center">
					<div class="text-sm">
						<router-link
							:to="{ name: 'forgot-password' }"
							class="font-medium text-primary"
						>
							Lupa Password?
						</router-link>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script setup>
	import { defineComponent, ref } from 'vue'
	import { useStore } from 'vuex'
	import Vbutton from '@/components/ui/button/index.vue'

	defineComponent({
		name: 'login-page',
		components: {
			Vbutton,
		},
	})

	const store = useStore()

	const form = ref({
		email: '',
		password: '',
	})

	const isShowPassword = ref(false)

	const handleLogin = () => {
		store.dispatch('auth/login', form.value)
	}
</script>
