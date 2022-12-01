<template>
	<div
		class="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200"
	>
		<header class="px-5 py-4 border-b border-gray-100">
			<h2 class="font-semibold text-gray-800">Direct VS Indirect</h2>
		</header>
		<div class="px-5 py-3">
			<ul ref="legend" class="flex flex-wrap"></ul>
		</div>
		<div class="grow">
			<BarChart
				ref="attendChartRef"
				:chartData="chartData"
				:options="chartOptions"
				:plugins="chartPlugins"
				class="h-96"
			/>
		</div>
	</div>
</template>

<script>
	import { ref } from 'vue'
	import { BarChart } from 'vue-chart-3'
	import colors from 'tailwindcss/colors'
	import theme from 'tailwindcss/defaultTheme'

	export default {
		name: 'attend-chart',
		components: {
			BarChart,
		},
		setup() {
			const legend = ref(null)
			const chartOptions = ref({
				layout: {
					padding: {
						top: 12,
						bottom: 16,
						left: 20,
						right: 20,
					},
				},
				scales: {
					y: {
						grid: {
							drawBorder: false,
						},
						ticks: {
							maxTicksLimit: 5,
							callback: (value) => value,
						},
					},
					x: {
						type: 'time',
						time: {
							parser: 'MM-DD-YYYY',
							unit: 'month',
							displayFormats: {
								month: 'MMM YY',
							},
						},
						grid: {
							display: false,
							drawBorder: false,
						},
					},
				},
				plugins: {
					legend: {
						display: false,
					},
					tooltip: {
						callbacks: {
							title: () => false, // Disable tooltip title
							label: (context) => context.parsed.y,
						},
					},
				},
				interaction: {
					intersect: false,
					mode: 'nearest',
				},
				animation: {
					duration: 500,
				},
				maintainAspectRatio: false,
				resizeDelay: 200,
			})

			const chartPlugins = ref([
				{
					id: 'htmlLegend',
					afterUpdate(c, args, options) {
						const ul = legend.value
						if (!ul) return
						// Remove old legend items
						while (ul.firstChild) {
							ul.firstChild.remove()
						}
						// Reuse the built-in legendItems generator
						const items =
							c.options.plugins.legend.labels.generateLabels(c)
						items.forEach((item) => {
							const li = document.createElement('li')
							li.style.marginRight = theme.margin[4]
							// Button element
							const button = document.createElement('button')
							button.style.display = 'inline-flex'
							button.style.alignItems = 'center'
							button.style.opacity = item.hidden ? '.3' : ''
							button.onclick = () => {
								c.setDatasetVisibility(
									item.datasetIndex,
									!c.isDatasetVisible(item.datasetIndex)
								)
								c.update()
							}
							// Color box
							const box = document.createElement('span')
							box.style.display = 'block'
							box.style.width = theme.width[3]
							box.style.height = theme.height[3]
							box.style.borderRadius = theme.borderRadius.full
							box.style.marginRight = theme.margin[2]
							box.style.borderWidth = '3px'
							box.style.borderColor = item.fillStyle
							box.style.pointerEvents = 'none'
							// Label
							const labelContainer =
								document.createElement('span')
							labelContainer.style.display = 'flex'
							labelContainer.style.alignItems = 'center'
							const value = document.createElement('span')
							value.style.color = colors.gray[800]
							value.style.fontSize = theme.fontSize['3xl'][0]
							value.style.lineHeight =
								theme.fontSize['3xl'][1].lineHeight
							value.style.fontWeight = theme.fontWeight.bold
							value.style.marginRight = theme.margin[2]
							value.style.pointerEvents = 'none'
							const label = document.createElement('span')
							label.style.color = colors.gray[500]
							label.style.fontSize = theme.fontSize.sm[0]
							label.style.lineHeight =
								theme.fontSize.sm[1].lineHeight
							const theValue = c.data.datasets[
								item.datasetIndex
							].data.reduce((a, b) => a + b, 0)
							const valueText = document.createTextNode(theValue)
							const labelText = document.createTextNode(item.text)
							value.appendChild(valueText)
							label.appendChild(labelText)
							li.appendChild(button)
							button.appendChild(box)
							button.appendChild(labelContainer)
							labelContainer.appendChild(value)
							labelContainer.appendChild(label)
							ul.appendChild(li)
						})
					},
				},
			])
			const chartData = ref({
				labels: [
					'12-01-2020',
					'01-01-2021',
					'02-01-2021',
					'03-01-2021',
					'04-01-2021',
					'05-01-2021',
				],
				datasets: [
					// Light blue bars
					{
						label: 'Direct',
						data: [800, 1600, 900, 1300, 1950, 1700],
						backgroundColor: colors.blue[400],
						hoverBackgroundColor: colors.blue[500],
						barPercentage: 0.66,
						categoryPercentage: 0.66,
					},
					// Blue bars
					{
						label: 'Indirect',
						data: [4900, 2600, 5350, 4800, 5200, 4800],
						backgroundColor: colors.indigo[500],
						hoverBackgroundColor: colors.indigo[600],
						barPercentage: 0.66,
						categoryPercentage: 0.66,
					},
				],
			})
			return {
				legend,
				chartOptions,
				chartPlugins,
				chartData,
			}
		},
	}
</script>
