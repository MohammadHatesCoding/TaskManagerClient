import type { IUserRepository } from "../../../core/repositories/IUserRepository";
import type { DeleteUserCommandDto } from "../../../data/dtos/User/DeleteUserCommandDto";

export class DeleteUserUseCase{

    constructor(
        private repository : IUserRepository
    ) {}

    async execute(
        dto: DeleteUserCommandDto
    ){
        return await this.repository.delete(dto);
    }
}