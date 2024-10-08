import {Injectable} from "@nestjs/common";
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

    async findAll() {}

    async findOne() {}

    async create(body: CreateUserDto) {}

    async update() {}

    async delete() {}
}