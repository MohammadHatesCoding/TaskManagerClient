import type { GetProfileDetailsQueryDto } from "../../data/dtos/User/GetProfileDetailsQueryDto";
import type { GetProfileDetailsResponseDto } from "../../data/dtos/User/GetProfileDetailsResponseDto";
import type { UpdateProfileCommandDto } from "../../data/dtos/User/UpdateProfileCommandDto";
import type { UpdateProfileResponseDto } from "../../data/dtos/User/UpdateProfileResponseDto";
import type { CreateUserCommandDto } from "../../data/dtos/User/CreateUserCommandDto";
import type { CreateUserResponseDto } from "../../data/dtos/User/CreateUserResponse";
import type { UpdateUserCommandDto } from "../../data/dtos/User/UpdateUserCommandDto";
import type { UpdateUserResponseDto } from "../../data/dtos/User/UpdateUserResponse";
import type { DeleteUserCommandDto } from "../../data/dtos/User/DeleteUserCommandDto"; 
import type { DeleteUserResponseDto } from "../../data/dtos/User/DeleteUserResponse";
import type { GetDetailsQueryDto } from "../../data/dtos/User/GetDetailsQueryDto";
import type { GetDetailsResponseDto } from "../../data/dtos/User/GetDetailsResponseDto";
import type { GetAllUsersQueryDto } from "../../data/dtos/User/GetAllUsersQueryDto";
import type { GetAllUsersResponseDto } from "../../data/dtos/User/GetAllUsersResponseDto";
import type { ToggleActivityCommandDto } from "../../data/dtos/User/ToggleActivityCommandDto";
import type { ToggleActivityResponseDto } from "../../data/dtos/User/ToggleActivityResponseDto";
import type { ToggleBlockCommandDto } from "../../data/dtos/User/ToggleBlockCommandDto";
import type { ToggleBlockResponseDto } from "../../data/dtos/User/ToggleBlockResponseDto";

export interface IUserRepository{
    getProfileDetails(
        dto : GetProfileDetailsQueryDto
    ) : Promise<GetProfileDetailsResponseDto>

    updateProfile(
        dto : UpdateProfileCommandDto
    ) : Promise<UpdateProfileResponseDto>

    create(
        dto : CreateUserCommandDto
    ) : Promise<CreateUserResponseDto>

    update(
        dto : UpdateUserCommandDto
    ) : Promise<UpdateUserResponseDto>

    delete(
        dto : DeleteUserCommandDto
    ) : Promise<DeleteUserResponseDto>


    getDetails(
        dto : GetDetailsQueryDto
    ) : Promise<GetDetailsResponseDto>

    getAllUsers(
        dto : GetAllUsersQueryDto
    ) : Promise<GetAllUsersResponseDto[]>

    toggleActivity(
        dto : ToggleActivityCommandDto
    ) : Promise<ToggleActivityResponseDto>

    toggleBlock(
        dto : ToggleBlockCommandDto
    ) : Promise<ToggleBlockResponseDto>    
}