<template>
	<div
		class="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-gray-200"
	>
		<div class="px-5 pt-5">
			<header class="flex justify-between items-start mb-2">
				<!-- <EditMenu align="right" class="relative inline-flex">
			<li>
			  <a class="font-medium text-sm text-gray-600 hover:text-gray-800 flex py-1 px-3" href="#0">Option 1</a>
			</li>
			<li>
			  <a class="font-medium text-sm text-gray-600 hover:text-gray-800 flex py-1 px-3" href="#0">Option 2</a>
			</li>
			<li>
			  <a class="font-medium text-sm text-red-500 hover:text-red-600 flex py-1 px-3" href="#0">Remove</a>
			</li>
		  </EditMenu> -->
			</header>
			<h2 class="text-lg font-semibold text-gray-800 mb-2">Permit</h2>
			<!-- <div class="text-xs font-semibold text-gray-400 uppercase mb-1">
				Sales
			</div>
			<div class="flex items-start">
				<div class="text-3xl font-bold text-gray-800 mr-2">$24,780</div>
				<div
					class="text-sm font-semibold text-white px-1.5 bg-green-500 rounded-full"
				>
					+49%
				</div>
			</div> -->
		</div>
		<!-- Chart built with Chart.js 3 -->
		<div class="grow">
			<!-- Change the height attribute to adjust the chart height -->
			<LineChart :chartData="chartData" :options="chartOptions" />
		</div>
	</div>
</template>

<script>
	import { ref } from 'vue'
	import { LineChart } from 'vue-chart-3'
	import { hexToRGB } from '@/core/utils'
	import colors from 'tailwindcss/colors'
	import 'chartjs-adapter-moment'

	export default {
		name: 'present-chart',
		components: {
			LineChart,
		},
		setup() {
			const chartOptions = ref({
				chartArea: {
					backgroundColor: colors.gray[50],
				},
				layout: {
					padding: 20,
				},
				scales: {
					y: {
						display: false,
						beginAtZero: true,
					},
					x: {
						type: 'time',
						time: {
							parser: 'MM-DD-YYYY',
							unit: 'month',
						},
						display: false,
					},
				},
				interaction: {
					intersect: false,
					mode: 'nearest',
				},
				maintainAspectRatio: false,
				resizeDelay: 200,
				tooltip: {
					callbacks: {
						title: () => false, // Disable tooltip title
						label: (context) => context.parsed.y,
					},
				},
				legend: {
					display: false,
				},
			})

			const chartData = ref({
				labels: [
					'12-01-2020',
					'01-01-2021',
					'02-01-2021',
					'03-01-2021',
					'04-01-2021',
					'05-01-2021',
					'06-01-2021',
					'07-01-2021',
					'08-01-2021',
					'09-01-2021',
					'10-01-2021',
					'11-01-2021',
					'12-01-2021',
					'01-01-2022',
					'02-01-2022',
					'03-01-2022',
					'04-01-2022',
					'05-01-2022',
					'06-01-2022',
					'07-01-2022',
					'08-01-2022',
					'09-01-2022',
					'10-01-2022',
					'11-01-2022',
					'12-01-2022',
					'01-01-2023',
				],
				datasets: [
					{
						label: 'Cubic interpolation (monotone)',
						data: [
							732, 610, 610, 504, 504, 504, 349, 349, 504, 342,
							504, 610, 391, 192, 154, 273, 191, 191, 126, 263,
							349, 252, 423, 622, 470, 532,
						],
						fill: true,
						backgroundColor: `rgba(${hexToRGB(
							colors.blue[500]
						)}, 0.08)`,
						borderColor: colors.indigo[500],
						borderWidth: 2,
						tension: 0,
						pointRadius: 0,
						pointHoverRadius: 3,
						pointBackgroundColor: colors.indigo[500],
						clip: 20,
					},
					{
						label: 'Cubic interpolation',
						data: [
							532, 532, 532, 404, 404, 314, 314, 314, 314, 314,
							234, 314, 234, 234, 314, 314, 314, 388, 314, 202,
							202, 202, 202, 314, 720, 642,
						],
						borderColor: colors.gray[300],
						borderWidth: 2,
						tension: 0,
						pointRadius: 0,
						pointHoverRadius: 3,
						pointBackgroundColor: colors.gray[300],
						clip: 20,
					},
				],
			})

			return {
				chartOptions,
				chartData,
			}
		},
	}
</script>
