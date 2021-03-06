import { AdminDto } from './admin.type'
import { ClinicDto } from './clinic.type'
import { DateInterface } from './date.type'
export interface AppInboxDto extends DateInterface {
	id?: number
	message: string
	isRead: boolean
	clinic?: ClinicDto
	admin?: AdminDto
}
