import type { UserRoleDetailsByUserIdDto } from "./UserRoleDetailsByUserIdDto"

export interface GetDetailsResponseDto{
    id: string, 
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