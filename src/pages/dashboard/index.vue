<template>
	<v-container>
		<template #title>{{ t('menus.dashboard.index') }}</template>
		<template #content>
			<div class="py-8 w-full max-w-9xl mx-auto">
				<WelcomeBanner />

				<div class="grid justify-items-end">
					<div
						class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2"
					>
						<Dropdown align="right" />
						<DatePicker align="right" />
						<button
							type="button"
							@click="showModal = !showModal"
							class="mx-auto w-full flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
							>
							Open Modal
						</button>
					</div>
				</div>

				<div class="grid grid-cols-12 gap-6 mt-8">
					<PresentChart />
					<PermitChart />
					<AlphaChart />
					<AttendChart />
				</div>
			</div>
		</template>
	</v-container>
	<Modal :show="showModal">
		<p class="mb-4">Gokuu is...</p>
    	<img src="https://i.gifer.com/QjMQ.gif" />
	</Modal>
</template>

<script>
	import { ref } from 'vue'
	import WelcomeBanner from '@/components/ui/welcome-banner/index.vue'
	import Dropdown from '@/components/ui/dropdown/index.vue'
	import DatePicker from '@/components/form/date-picker/index.vue'
	import PresentChart from './components/present-chart.vue'
	import PermitChart from './components/permit-chart.vue'
	import AlphaChart from './components/alpha-chart.vue'
	import AttendChart from './components/attend-chart.vue'
	import Modal from '@/components/ui/modal/index.vue'
	import { useI18n } from 'vue-i18n'

	export default {
		name: "dashboard-page",
		components: {
			WelcomeBanner,
			Dropdown,
			DatePicker,
			Modal,
			PresentChart,
			PermitChart,
			AlphaChart,
			AttendChart
		},
		setup() {
			const { t } = useI18n()

			const showModal = ref(false)

			return {
				t,
				showModal
			}
		}
	}
</script>
