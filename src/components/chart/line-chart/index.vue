<template>
	<div class="px-5 py-2" v-if="hasHeader">
		<div class="flex flex-wrap justify-between items-end">
			<div class="flex items-start">
				<div class="text-3xl font-bold text-gray-800 mr-2">
					{{ title }}
				</div>
				<div
					class="text-sm font-semibold text-white px-1 5 bg-yellow-500 rounded-full"
				>
					{{ subtitle }}
				</div>
			</div>
		</div>
	</div>
	<div class="grow">
		<canvas
			ref="canvas"
			:data="data"
			:width="width"
			:height="height"
		></canvas>
	</div>
</template>

<script>
	import { ref, onMounted, onUnmounted, computed } from 'vue'
	import {
		Chart,
		LineController,
		LineElement,
		Filler,
		PointElement,
		LinearScale,
		TimeScale,
		Tooltip,
	} from 'chart.js'
	import 'chartjs-adapter-moment'

	export default {
		name: 'v-line-chart',
		props: {
			data: {
				type: Object,
				required: true,
			},
			width: {
				type: Number,
				required: false,
			},
			height: {
				type: Number,
				required: false,
			},
			title: {
				type: String,
				required: false,
			},
			subtitle: {
				type: String,
				required: false,
			},
		},
		setup(props) {
			const canvas = ref(null)
			const legend = ref(null)
			let chart = null

			const hasHeader = computed(
				() => props.title !== null && props.subtitle !== null
			)

			onMounted(() => {
				const ctx = canvas.value
				chart = new Chart(ctx, {
					type: 'line',
					data: props.data,
					options: {
						layout: {
							padding: 20,
						},
						scales: {
							y: {
								grid: {
									drawBorder: false,
									beginAtZero: true,
								},
								ticks: {
									maxTicksLimit: 5,
									callback: (value) => formatValue(value),
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
								ticks: {
									autoSkipPadding: 48,
									maxRotation: 0,
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
									label: (context) =>
										formatValue(context.parsed.y),
								},
							},
						},
						interaction: {
							intersect: false,
							mode: 'nearest',
						},
						maintainAspectRatio: false,
						resizeDelay: 200,
					},
					plugins: [
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
									c.options.plugins.legend.labels.generateLabels(
										c
									)
								items.slice(0, 2).forEach((item) => {
									const li = document.createElement('li')
									li.style.marginLeft =
										tailwindConfig().theme.margin[3]
									// Button element
									const button =
										document.createElement('button')
									button.style.display = 'inline-flex'
									button.style.alignItems = 'center'
									button.style.opacity = item.hidden
										? '.3'
										: ''
									button.onclick = () => {
										c.setDatasetVisibility(
											item.datasetIndex,
											!c.isDatasetVisible(
												item.datasetIndex
											)
										)
										c.update()
									}
									// Color box
									const box = document.createElement('span')
									box.style.display = 'block'
									box.style.width =
										tailwindConfig().theme.width[3]
									box.style.height =
										tailwindConfig().theme.height[3]
									box.style.borderRadius =
										tailwindConfig().theme.borderRadius.full
									box.style.marginRight =
										tailwindConfig().theme.margin[2]
									box.style.borderWidth = '3px'
									box.style.borderColor =
										c.data.datasets[
											item.datasetIndex
										].borderColor
									box.style.pointerEvents = 'none'
									// Label
									const label = document.createElement('span')
									label.style.color =
										tailwindConfig().theme.colors.gray[500]
									label.style.fontSize =
										tailwindConfig().theme.fontSize.sm[0]
									label.style.lineHeight =
										tailwindConfig().theme.fontSize.sm[1].lineHeight
									const labelText = document.createTextNode(
										item.text
									)
									label.appendChild(labelText)
									li.appendChild(button)
									button.appendChild(box)
									button.appendChild(label)
									ul.appendChild(li)
								})
							},
						},
					],
				})
			})

			onUnmounted(() => chart.destroy())

			return {
				canvas,
				legend,
			}
		},
	}
</script>
