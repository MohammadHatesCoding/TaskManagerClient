import type { CreatePasswordCommandDto } from "../../data/dtos/CreatePasswordCommandDto";
import type { CreatePasswordResponseDto } from "../../data/dtos/CreatePasswordResponseDto";
import type { ForgotPasswordCommandDto } from "../../data/dtos/ForgotPasswordCommandDto";
import type { ForgotPasswordResponseDto } from "../../data/dtos/ForgotPasswordResponseDto";
import type { LoginCommandDto } from "../../data/dtos/LoginCommandDto";
import type { LoginResponseDto } from "../../data/dtos/LoginResponseDto";
import type { LogoutCommandDto } from "../../data/dtos/LogoutCommandDto";
import type { LogoutResponseDto } from "../../data/dtos/LogoutResponseDto";
import type { RegisterCommandDto } from "../../data/dtos/RegisterCommandDto";
import type { RegisterResponseDto } from "../../data/dtos/RegisterResponseDto"
import type { ResetPasswordCommandDto } from "../../data/dtos/ResetPasswordCommandDto";
import type { ResetPasswordResponseDto } from "../../data/dtos/ResetPasswordResponseDto";

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