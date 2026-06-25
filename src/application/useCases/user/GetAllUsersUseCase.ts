import type { IUserRepository } from "../../../core/repositories/IUserRepository";
import type { GetAllUsersQueryDto } from "../../../data/dtos/User/GetAllUsersQueryDto";

export class GetAllUsersUseCase{

    constructor(
        private repository: IUserRepository
    ) {}

    async execute(
        dto: GetAllUsersQueryDto
    ){
        return await this.repository.getAllUsers(dto);
    }
}