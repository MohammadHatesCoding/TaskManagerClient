import type { IAuthRepository } from "../../../core/repositories/IAuthRepository";
import type { ResetPasswordCommandDto } from "../../../data/dtos/Auth/ResetPasswordCommandDto";

export class ResetPasswordUseCase{

    constructor(
        private repository : IAuthRepository
    ) {}

    async execute(
        dto: ResetPasswordCommandDto
    ) {
        return this.repository.resetPassword(dto);
    }
}