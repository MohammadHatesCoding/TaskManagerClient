import type { IAuthRepository } from "../../../core/repositories/IAuthRepository";

import type { LogoutCommandDto } from "../../../data/dtos/LogoutCommandDto";

export class LogoutUseCase {

    constructor(
        private repository:
            IAuthRepository
    ) {}

    async execute(
        dto: LogoutCommandDto
    ) 
    {
        return await this.repository.logout(dto);
    }

}