export const DashboardTabs: TabType[] = [
	{
		id: 1,
		name: 'Overview',
		route: '/home/dashboard/overview',
	},
	{
		id: 2,
		name: 'Analytics',
		route: '/home/dashboard/analytics',
	},
]

export type TabType = {
	id: number
	name: string
	route: string
}
