import { UserRoleDetailsByUserIdDto } from "./UserRoleDetailsByUserIdDto"

export interface UpdateUserRequestDto{
    id: string
    name: string,
    lastName: string,
    nationalCode: string,
    birthDate: string, 
    email: string, 
    phoneNumber: string,
    username: string,
    isActive: boolean,
    isBlocked: boolean,
    userRoles: UserRoleDetailsByUserIdDto[]
}