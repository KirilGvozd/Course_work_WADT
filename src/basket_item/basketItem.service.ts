import {Injectable, NotFoundException} from "@nestjs/common";
import {Repository} from "typeorm";
import {BasketItem} from "../entities/basketItem.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {CreateBasketItemDto} from "./dto/createBasketItemDto";

@Injectable()
export class BasketItemService {
    constructor(
        @InjectRepository(BasketItem)
        private itemRepo: Repository<BasketItem>
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

        if (!result) throw new NotFoundException();

        return result;
    }

    async create(body: CreateBasketItemDto) {
        return await this.itemRepo.save(body);
    }

    async delete(id: number) {
        return await this.itemRepo.delete(id);
    }

    async update(id: number, body: CreateBasketItemDto) {
        return await this.itemRepo.update(id, body);
    }
}