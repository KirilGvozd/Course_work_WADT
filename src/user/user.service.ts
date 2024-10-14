import {Injectable, NotFoundException} from "@nestjs/common";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../entities/user.entity";
import {CreateUserDto} from "./dto/createUserDto";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {}

    async findAll() {
        return await this.userRepository.find();
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

    async create(body: CreateUserDto) {
        return await this.userRepository.save(body);
    }

    async update(id: number, body: CreateUserDto) {
        return await this.userRepository.update(id, body);
    }

    async delete(id: number) {
        return await this.userRepository.delete(id);
    }
}