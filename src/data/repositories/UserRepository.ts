import type { IUserRepository } from "../../core/repositories/IUserRepository";
import api from "../../infrastructure/api/axiosConfig";
import type { GetProfileDetailsQueryDto } from "../dtos/User/GetProfileDetailsQueryDto";
import type { GetProfileDetailsResponseDto } from "../dtos/User/GetProfileDetailsResponseDto";
import type { UpdateProfileCommandDto } from "../../data/dtos/User/UpdateProfileCommandDto";
import type { UpdateProfileResponseDto } from "../../data/dtos/User/UpdateProfileResponseDto";
import type { CreateUserCommandDto } from "../../data/dtos/User/CreateUserCommandDto";
import type { CreateUserResponseDto } from "../../data/dtos/User/CreateUserResponse";
import type { UpdateUserCommandDto } from "../../data/dtos/User/UpdateUserCommandDto";
import type { UpdateUserResponseDto } from "../../data/dtos/User/UpdateUserResponse";
import type { DeleteUserCommandDto } from "../../data/dtos/User/DeleteUserCommandDto";
import type { DeleteUserResponseDto } from "../../data/dtos/User/DeleteUserResponse";
import type { GetDetailsQueryDto } from "../dtos/User/GetDetailsQueryDto";
import type { GetDetailsResponseDto } from "../dtos/User/GetDetailsResponseDto";
import type { GetAllUsersQueryDto } from "../dtos/User/GetAllUsersQueryDto";
import type { GetAllUsersResponseDto } from "../dtos/User/GetAllUsersResponseDto";
import type { ToggleActivityCommandDto } from "../dtos/User/ToggleActivityCommandDto";
import type { ToggleActivityResponseDto } from "../dtos/User/ToggleActivityResponseDto";
import type { ToggleBlockCommandDto } from "../dtos/User/ToggleBlockCommandDto";
import type { ToggleBlockResponseDto } from "../dtos/User/ToggleBlockResponseDto";


export class UserRepository implements IUserRepository {

    async getProfileDetails(
        dto: GetProfileDetailsQueryDto
    ): Promise<GetProfileDetailsResponseDto> {

        const respone = await api.get<GetProfileDetailsResponseDto>(
            '/User/GetProfileDetails'
        );

        return respone.data;
    }

    async updateProfile(
        dto: UpdateProfileCommandDto
    ): Promise<UpdateProfileResponseDto> {

        const respone = await api.post<UpdateProfileResponseDto>(
            '/User/UpdateProfile',
            dto
        );

        return respone.data;
    }
    
    async create(
        dto: CreateUserCommandDto
    ): Promise<CreateUserResponseDto> {

        const respone = await api.post<CreateUserResponseDto>(
            '/User/Create',
            dto
        );

        return respone.data;
    }
    
    async update(
        dto: UpdateUserCommandDto
    ): Promise<UpdateUserResponseDto> {

        const respone = await api.post<UpdateUserResponseDto>(
            '/User/Update',
            dto
        );

        return respone.data;
    }
    
    async delete(
        dto: DeleteUserCommandDto
    ): Promise<DeleteUserResponseDto> {

        const respone = await api.post<DeleteUserResponseDto>(
            '/User/Delete',
            dto
        );

        return respone.data;
    }
    
    async getDetails(
        dto: GetDetailsQueryDto
    ): Promise<GetDetailsResponseDto> {

        const respone = await api.post<GetDetailsResponseDto>(
            '/User/GetDetails',
            dto
        );

        return respone.data;
    }

    async getAllUsers(
        dto: GetAllUsersQueryDto
    ): Promise<GetAllUsersResponseDto[]> {

        const respone = await api.get<GetAllUsersResponseDto[]>(
            '/User/GetAll'
        );

        return respone.data;
    }

    async toggleActivity(
        dto: ToggleActivityCommandDto
    ): Promise<ToggleActivityResponseDto> {

        const respone = await api.post<ToggleActivityResponseDto>(
            '/User/ToggleActivity',
            dto
        );

        return respone.data;
    }

    async toggleBlock(
        dto: ToggleBlockCommandDto
    ): Promise<ToggleBlockResponseDto> {

        const respone = await api.post<ToggleBlockResponseDto>(
            '/User/ToggleBlock',
            dto
        );

        return respone.data;
    }    
}