<template>
	<v-container>
		<template #title>Profile</template>
		<template #content>
			<profile-layout>
				<template #nav>
					<div class="flex flex-col items-center">
						<router-link
							:to="{ name: 'profile-edit' }"
							class="bg-[#4299E1] hover:bg-blue-700 py-[0.5rem] px-[0.25rem] rounded text-white w-[78px] h-[36px] text-[14px]"
						>
							Edit Profile
						</router-link>
					</div>
				</template>

				<div
					class="grid gap-6 lg:grid-cols-2 text-[#6E6B7B] text-[14px]"
				>
					<div>
						<div class="flex flex-col pb-1">
							<span class="font-bold">Nama Lengkap :</span>
							<span>{{ user.name }}</span>
						</div>

						<div class="flex flex-col py-1">
							<span class="font-bold">E - Mail :</span>
							<span>{{ user.email }}</span>
						</div>

						<div class="flex flex-col py-1">
							<span class="font-bold">No. HP/WhatsApp :</span>
							<span>{{ user.phone }}</span>
						</div>
					</div>

					<div>
						<div class="flex flex-col pb-1">
							<span class="font-bold">Jenis Kelamin :</span>
							<span>{{ genderFormatter(user.gender) }}</span>
						</div>

						<div class="flex flex-col py-1">
							<span class="font-bold">Tanggal Lahir</span>
							<span>{{ user.birthdate }}</span>
						</div>

						<div class="flex flex-col py-1">
							<span class="font-bold">Jabatan : </span>
							<span>{{ user.role }}</span>
						</div>
					</div>
				</div>
			</profile-layout>
		</template>
	</v-container>
</template>

<script>
	import { defineComponent, computed, onMounted } from 'vue'
	import { useStore } from 'vuex'
	import ProfileLayout from './layouts/ProfileLayout.vue'
	import { genderFormatter } from '@/core/utils/formatter'

	export default defineComponent({
		name: 'profile-page',
		components: {
			ProfileLayout,
		},
		setup() {
			const store = useStore()

			const user = computed(() => store.getters['profile/getUserProfile'])

			const profile = computed(() =>
				user.value.name
					.split(' ')
					.map((name) => name[0])
					.join('')
			)

			onMounted(() => {
				store.dispatch('profile/getProfile')
			})

			return {
				user,
				profile,
				genderFormatter,
			}
		},
	})
</script>
