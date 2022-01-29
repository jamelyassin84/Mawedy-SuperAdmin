export interface AdminDto {
	email?: string

	phone: number

	areaCode?: number

	role?: AdminRoles

	username: string

	password: string

	avatar: string | null

	isActive?: boolean

	isLoggedIn?: boolean
}

export type AdminRoles = 'super' | 'admin' | 'staff'
