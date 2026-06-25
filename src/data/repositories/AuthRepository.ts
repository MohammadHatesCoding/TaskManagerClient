import api from "../../infrastructure/api/axiosConfig";
import type { IAuthRepository } from "../../core/repositories/IAuthRepository";
import type { RegisterResponseDto } from "../dtos/Auth/RegisterResponseDto";
import type { RegisterCommandDto } from "../dtos/Auth/RegisterCommandDto";
import type { LoginCommandDto } from "../dtos/Auth/LoginCommandDto";
import type { LoginResponseDto } from "../dtos/Auth/LoginResponseDto";
import type { CreatePasswordCommandDto } from "../dtos/Auth/CreatePasswordCommandDto";
import type { CreatePasswordResponseDto } from "../dtos/Auth/CreatePasswordResponseDto";
import type { LogoutCommandDto } from "../dtos/Auth/LogoutCommandDto";
import type { LogoutResponseDto } from "../dtos/Auth/LogoutResponseDto";
import type { ResetPasswordCommandDto } from "../dtos/Auth/ResetPasswordCommandDto";
import type { ResetPasswordResponseDto } from "../dtos/Auth/ResetPasswordResponseDto";
import type { ForgotPasswordCommandDto } from "../dtos/Auth/ForgotPasswordCommandDto";
import type { ForgotPasswordResponseDto } from "../dtos/Auth/ForgotPasswordResponseDto";

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
    
    async resetPassword(
        dto: ResetPasswordCommandDto
    ): Promise<ResetPasswordResponseDto> {
        const response = await api.post<ResetPasswordResponseDto>(
            '/Auth/ResetPassword',
            dto
        );

        return response.data;
    }

    async forgotPassword(
        dto: ForgotPasswordCommandDto
    ): Promise<ForgotPasswordResponseDto> {
        const response = await api.post<ForgotPasswordResponseDto>(
            '/Auth/ForgotPassword',
            dto
        );

        return response.data;
    }    
}