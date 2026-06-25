import type { IUserRepository } from "../../../core/repositories/IUserRepository";
import type { ToggleActivityCommandDto } from "../../../data/dtos/User/ToggleActivityCommandDto";

export class ToggleActivityUseCase{

    constructor(private repository: IUserRepository ) {}

    async execute(
        dto: ToggleActivityCommandDto
    ){
        return this.repository.toggleActivity(dto);
    }
}