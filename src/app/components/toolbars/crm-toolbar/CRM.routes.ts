import { TabType } from './../dashboard-toolbar/Dasboard.route'
export const CRMTabs: TabType[] = [
	{
		id: 1,
		name: 'On-Trial',
		route: '/home/crm/admin-user',
	},
	// {
	// 	id: 2,
	// 	name: 'Web Solution',
	// 	route: '/home/crm/app-user',
	// },
	{
		id: 3,
		name: 'Mobile Application Only',
		route: '/home/crm/app-user',
	},
	{
		id: 4,
		name: 'Premium User',
		route: '/home/crm/premium-user',
	},
]
