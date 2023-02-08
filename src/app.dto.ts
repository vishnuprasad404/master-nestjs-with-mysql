import { UserAccountType } from './data.model'

export class createUserDto {
    id: string
    name: string
    email: string
    userType: UserAccountType
    created_at: Date
    updated_at: Date
}