export const SidebarNav: SidebarNavType[] = [
	{
		name: 'Dashboard',
		route: `/home/`,
		icon: `home`,
	},
	{
		name: 'CRM',
		route: `/home/crm`,
		icon: `users`,
	},
	{
		name: 'Inbox',
		route: `/home/inbox`,
		icon: `inbox`,
	},
]
export type SidebarNavType = {
	name: string
	route: string
	icon: string
}
