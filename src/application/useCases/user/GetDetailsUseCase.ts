import type { IUserRepository } from "../../../core/repositories/IUserRepository";
import type { GetDetailsQueryDto } from "../../../data/dtos/User/GetDetailsQueryDto";

export class GetDetailsUseCase{

    constructor(
        private repository : IUserRepository
    ) { }

    async execute(
        dto : GetDetailsQueryDto
    ){
        return await this.repository.getDetails(dto);
    }
}