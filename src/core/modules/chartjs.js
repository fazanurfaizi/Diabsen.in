import { Chart, registerables } from 'chart.js'

export const chartjs = () => Chart.register(...registerables)
