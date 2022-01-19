export const SidebarNav: SidebarNavType[] = [
	{
		name: 'Dashboard',
		route: `/home/`,
		icon: `home`,
	},
	{
		name: 'CRM',
		route: `/home/`,
		icon: `users`,
	},
	{
		name: 'Inbox',
		route: `/home/`,
		icon: `mail`,
	},
]
export type SidebarNavType = {
	name: string
	route: string
	icon: string
}
