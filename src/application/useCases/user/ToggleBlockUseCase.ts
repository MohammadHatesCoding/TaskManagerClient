import type { IUserRepository } from "../../../core/repositories/IUserRepository";
import type { ToggleBlockCommandDto } from "../../../data/dtos/User/ToggleBlockCommandDto";

export class ToggleBlockUseCase{

    constructor(private repository: IUserRepository ) {}

    async execute(
        dto: ToggleBlockCommandDto
    ){
        return this.repository.toggleBlock(dto);
    }
}