import type { IUserRepository } from "../../../core/repositories/IUserRepository";
import type { CreateUserCommandDto } from "../../../data/dtos/User/CreateUserCommandDto";

export class CreateUserUseCase{

    constructor(
        private repository : IUserRepository
    ) {}

    async execute(
        dto: CreateUserCommandDto
    ){
        return await this.repository.create(dto);
    }
}