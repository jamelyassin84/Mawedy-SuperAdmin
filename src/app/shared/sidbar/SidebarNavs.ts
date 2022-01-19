export const SidebarNav: SidebarNavType[] = [
	{
		name: 'Dashboard',
		route: `/home/`,
		icon: `lni lni-dashboard`,
	},
	{
		name: 'CRM',
		route: `/home/`,
		icon: `lni lni-hospital`,
	},
	{
		name: 'Inbox',
		route: `/home/`,
		icon: `lni lni-comments`,
	},
]
export type SidebarNavType = {
	name: string
	route: string
	icon: string
}
