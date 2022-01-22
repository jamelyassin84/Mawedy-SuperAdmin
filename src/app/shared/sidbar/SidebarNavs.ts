export const SidebarNav: SidebarNavType[] = [
	{
		name: 'Home',
		route: `/home/`,
		icon: `home`,
	},
	{
		name: 'Subscribers',
		route: `/home/crm`,
		icon: `users`,
	},
	// {
	// 	name: 'Clinics',
	// 	route: `/home/crm`,
	// 	icon: `users`,
	// },
	// {
	// 	name: 'Hospitals',
	// 	route: `/home/crm`,
	// 	icon: `users`,
	// },
	{
		name: 'Mails',
		route: `/home/inbox`,
		icon: `inbox`,
	},
	// {
	// 	name: 'Logs',
	// 	route: `/home/crm`,
	// 	icon: `users`,
	// },
]
export type SidebarNavType = {
	name: string
	route: string
	icon: string
}
