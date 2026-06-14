import api from "../../infrastructure/api/axiosConfig";
import type { IAuthRepository } from "../../core/repositories/IAuthRepository";
import type { RegisterResponseDto } from "../dtos/RegisterResponseDto";
import type { RegisterCommandDto } from "../dtos/RegisterCommandDto";
import type { LoginCommandDto } from "../dtos/LoginCommandDto";
import type { LoginResponseDto } from "../dtos/LoginResponseDto";
import type { CreatePasswordCommandDto } from "../dtos/CreatePasswordCommandDto";
import type { CreatePasswordResponseDto } from "../dtos/CreatePasswordResponseDto";
import type { LogoutCommandDto } from "../dtos/LogoutCommandDto";
import type { LogoutResponseDto } from "../dtos/LogoutResponseDto";

export class AuthRepository implements IAuthRepository{

    async register(
        dto: RegisterCommandDto
    ) : Promise<RegisterResponseDto> {

        const response = await api.post<RegisterResponseDto>(
            '/Auth/Register',
            dto
        );

        return response.data;
    }

    async login(
        dto: LoginCommandDto
    ) : Promise<LoginResponseDto> {

        const response = await api.post<LoginResponseDto>(
            '/Auth/Login',
            dto
        );

        return response.data;
    }
    
    async createPassword(
        dto: CreatePasswordCommandDto
    ) : Promise<CreatePasswordResponseDto> {

        const response = await api.post<CreatePasswordResponseDto>(
            '/Auth/CreatePassword',
            dto
        );

        return response.data;
    }

    async logout(
        dto: LogoutCommandDto
    ) : Promise<LogoutResponseDto> {

        const response = await api.post<LogoutResponseDto>(
            '/Auth/Logout',
            dto
        );

        return response.data;
    }    
}