import type { IAuthRepository } from "../../../core/repositories/IAuthRepository";
import type { ForgotPasswordCommandDto } from "../../../data/dtos/Auth/ForgotPasswordCommandDto";

export class ForgotPasswordUseCase{

    constructor(
        private repository : IAuthRepository
    ) { }

    async execute(
        dto: ForgotPasswordCommandDto
    ) {
        return this.repository.forgotPassword(dto);
    }
}