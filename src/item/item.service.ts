import {Injectable} from "@nestjs/common";
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

    async findAll() {}

    async findOne() {}

    async create(body: CreateItemDto) {}

    async update() {}

    async delete() {}
}