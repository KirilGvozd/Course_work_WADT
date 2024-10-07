import {Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {Type} from "../entities/type.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {CreateTypeDto} from "./dto/createTypeDto";

@Injectable()
export class TypeService {
    constructor(
        @InjectRepository(Type)
        private typeRepository: Repository<Type>
    ) {}

    async findAll() {}

    async findOne() {}

    async create(dto: CreateTypeDto) {}

    async update() {}

    async delete() {}
}