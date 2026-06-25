import type { IUserRepository } from "../../../core/repositories/IUserRepository";
import type { GetProfileDetailsQueryDto } from "../../../data/dtos/User/GetProfileDetailsQueryDto";

export class GetProfileDetails{

    constructor(
        private repository : IUserRepository
    ) {}

    async execute(
        dto: GetProfileDetailsQueryDto
    ){
        return await this.repository.getProfileDetails(dto);
    }
}