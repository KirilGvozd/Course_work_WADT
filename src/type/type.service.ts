import {Injectable, NotFoundException} from "@nestjs/common";
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

    async findAll() {
        return await this.typeRepository.find();
    }

    async findOne(id: number) {
        const result = await this.typeRepository.findOne({
            where: {
                id
            }
        });

        if (!result) throw new NotFoundException("Not Found");

        return result;
    }

    async create(body: CreateTypeDto) {
        return await this.typeRepository.save(body);
    }

    async update(id: number, body: CreateTypeDto) {
        return await this.typeRepository.update(id, body);
    }

    async delete(id: number) {
        return await this.typeRepository.delete(id);
    }
}