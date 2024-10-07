import {Injectable} from "@nestjs/common";
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

    async findAll() {}

    async findOne() {}

    async create(dto: CreateBasketItemDto) {}

    async update() {}

    async delete() {}
}