export const analyticChartConfig = {
	options: {
		scaleShowVerticalLines: false,
		responsive: true,
		width: 20,
	},
	labels: [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	],
	legend: true,
	datasets: [
		{
			data: [20, 40, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0],

			label: 'Total Reached',
			backgroundColor: ['#00b074'],
			color: ['#00b074'],
		},
	],
}
