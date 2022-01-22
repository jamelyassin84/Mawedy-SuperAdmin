export const randomNumber = (): number => {
	return Math.floor(Math.random() * 150)
}
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
			data: [
				randomNumber(),
				randomNumber(),
				randomNumber(),
				randomNumber(),
				randomNumber(),
				randomNumber(),
				randomNumber(),
				randomNumber(),
				randomNumber(),
				randomNumber(),
				randomNumber(),
				randomNumber(),
			],

			label: 'Total Reached',
			backgroundColor: ['#00b074'],
			color: ['#00b074'],
		},
	],
}
