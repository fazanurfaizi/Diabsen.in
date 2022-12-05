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
</template>

<script>
	import WelcomeBanner from '@/components/ui/welcome-banner/index.vue'
	import Dropdown from '@/components/ui/dropdown/index.vue'
	import DatePicker from '@/components/form/date-picker/index.vue'
	import PresentChart from './components/present-chart.vue'
	import PermitChart from './components/permit-chart.vue'
	import AlphaChart from './components/alpha-chart.vue'
	import AttendChart from './components/attend-chart.vue'
	import { useI18n } from 'vue-i18n'

	export default {
		name: "dashboard-page",
		components: {
			WelcomeBanner,
			Dropdown,
			DatePicker,
			PresentChart,
			PermitChart,
			AlphaChart,
			AttendChart
		},
		setup() {
			const { t } = useI18n()

			return {
				t
			}
		}
	}
</script>
