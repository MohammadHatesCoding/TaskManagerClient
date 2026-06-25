import type { IAuthRepository } from "../../../core/repositories/IAuthRepository";
import type { RegisterCommandDto } from "../../../data/dtos/Auth/RegisterCommandDto";

export class RegisterUseCase{

    constructor(
        private repository : IAuthRepository
    ) {}

    async execute(
        dto: RegisterCommandDto
    ) {
        return await this.repository.register(dto);
    }
}