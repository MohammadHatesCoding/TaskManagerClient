import type { IAuthRepository } from "../../../core/repositories/IAuthRepository";
import type { CreatePasswordCommandDto } from "../../../data/dtos/CreatePasswordCommandDto";

export class CreatePasswordUseCase{

    constructor(
        private repository : IAuthRepository
    ) {}

    async execute(
        dto: CreatePasswordCommandDto
    ) {
        return await this.repository.createPassword(dto);
    }
}