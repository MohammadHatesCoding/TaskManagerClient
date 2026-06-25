import type { CreatePasswordCommandDto } from "../../data/dtos/Auth/CreatePasswordCommandDto";
import type { CreatePasswordResponseDto } from "../../data/dtos/Auth/CreatePasswordResponseDto";
import type { ForgotPasswordCommandDto } from "../../data/dtos/Auth/ForgotPasswordCommandDto";
import type { ForgotPasswordResponseDto } from "../../data/dtos/Auth/ForgotPasswordResponseDto";
import type { LoginCommandDto } from "../../data/dtos/Auth/LoginCommandDto";
import type { LoginResponseDto } from "../../data/dtos/Auth/LoginResponseDto";
import type { LogoutCommandDto } from "../../data/dtos/Auth/LogoutCommandDto";
import type { LogoutResponseDto } from "../../data/dtos/Auth/LogoutResponseDto";
import type { RegisterCommandDto } from "../../data/dtos/Auth/RegisterCommandDto";
import type { RegisterResponseDto } from "../../data/dtos/Auth/RegisterResponseDto"
import type { ResetPasswordCommandDto } from "../../data/dtos/Auth/ResetPasswordCommandDto";
import type { ResetPasswordResponseDto } from "../../data/dtos/Auth/ResetPasswordResponseDto";

export interface IAuthRepository {
    register(
        dto: RegisterCommandDto
    ): Promise<RegisterResponseDto>;

    login(
        dto: LoginCommandDto
    ) : Promise<LoginResponseDto>

    createPassword(
        dto: CreatePasswordCommandDto
    ): Promise<CreatePasswordResponseDto>

    logout(
        dto: LogoutCommandDto
    ) : Promise<LogoutResponseDto>

    forgotPassword(
        dto: ForgotPasswordCommandDto
    ) : Promise<ForgotPasswordResponseDto>

    resetPassword(
        dto: ResetPasswordCommandDto
    ) : Promise<ResetPasswordResponseDto>    
}