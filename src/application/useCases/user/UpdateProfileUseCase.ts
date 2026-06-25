import type { IUserRepository } from "../../../core/repositories/IUserRepository";
import type { UpdateProfileCommandDto } from "../../../data/dtos/User/UpdateProfileCommandDto";

export class UpdateProfileUseCase{

    constructor(
        private repository : IUserRepository
    ) {}

    async execute(
        dto: UpdateProfileCommandDto
    ){
        return await this.repository.updateProfile(dto);
    }
}