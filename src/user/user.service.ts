import {Injectable, NotFoundException} from "@nestjs/common";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../entities/user.entity";
import {CreateUserDto} from "./dto/createUserDto";
import {PaginationDto} from "../pagination.dto";
import {DEFAULT_PAGE_SIZE} from "../utils/constants";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {}

    async findAll(paginationDto: PaginationDto) {
        return await this.userRepository.find({
            skip: paginationDto.skip,
            take: paginationDto.limit ?? DEFAULT_PAGE_SIZE,
        });
    }

    async findByEmail(email: string) {
        return await this.userRepository.findOne({
            where: {
                email,
            }
        })
    }

    async findOne(id: number) {
        const result = await this.userRepository.findOne({
            where: {
                id
            }
        });

        if (!result) throw new NotFoundException("Not Found");

        return result;
    }

    async update(id: number, body: CreateUserDto) {
        return await this.userRepository.update(id, body);
    }

    async delete(id: number) {
        return await this.userRepository.delete(id);
    }
}