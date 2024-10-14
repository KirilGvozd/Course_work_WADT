import {Injectable, NotFoundException} from "@nestjs/common";
import {Repository} from "typeorm";
import {Item} from "../entities/item.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {CreateItemDto} from "./dto/createItemDto";

@Injectable()
export class ItemService {
    constructor(
        @InjectRepository(Item)
        private itemRepo: Repository<Item>
    ) {}

    async findAll() {
        return await this.itemRepo.find();
    }

    async findOne(id: number) {
        const result = await this.itemRepo.findOne({
            where: {
                id
            }
        });

        if (!result) throw new NotFoundException("Not Found");

        return result;
    }

    async create(body: CreateItemDto) {
        return await this.itemRepo.save(body);
    }

    async update(id: number, body: CreateItemDto){
        return await this.itemRepo.update(id, body);
    }

    async delete(id: number){
        return await this.itemRepo.delete(id);
    }
}