import type { CreatePasswordCommandDto } from "../../data/dtos/CreatePasswordCommandDto";
import type { CreatePasswordResponseDto } from "../../data/dtos/CreatePasswordResponseDto";
import type { LoginCommandDto } from "../../data/dtos/LoginCommandDto";
import type { LoginResponseDto } from "../../data/dtos/LoginResponseDto";
import type { LogoutCommandDto } from "../../data/dtos/LogoutCommandDto";
import type { LogoutResponseDto } from "../../data/dtos/LogoutResponseDto";
import type { RegisterCommandDto } from "../../data/dtos/RegisterCommandDto";
import type { RegisterResponseDto } from "../../data/dtos/RegisterResponseDto"

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
}