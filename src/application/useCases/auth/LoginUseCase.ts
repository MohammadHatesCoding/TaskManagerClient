import type { IAuthRepository } from "../../../core/repositories/IAuthRepository";
import type { LoginCommandDto } from "../../../data/dtos/Auth/LoginCommandDto";

export class LoginUseCase{

    constructor(
        private repository : IAuthRepository
    ) {}

    async execute(
        dto: LoginCommandDto
    ) {
        return await this.repository.login(dto);
    }
}