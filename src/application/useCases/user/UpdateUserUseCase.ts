import type { IUserRepository } from "../../../core/repositories/IUserRepository";
import type { UpdateUserCommandDto } from "../../../data/dtos/User/UpdateUserCommandDto"; 

export class UpdateUserUseCase{

    constructor(
        private repository : IUserRepository
    ) {}

    async execute(
        dto: UpdateUserCommandDto
    ){
        return await this.repository.update(dto);
    }
}