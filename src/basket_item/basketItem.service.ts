import {Injectable, NotFoundException} from "@nestjs/common";
import {Repository} from "typeorm";
import {BasketItem} from "../entities/basketItem.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {CreateBasketItemDto} from "./dto/createBasketItemDto";
import {PaginationDto} from "../pagination.dto";
import {DEFAULT_PAGE_SIZE} from "../utils/constants";

@Injectable()
export class BasketItemService {
    constructor(
        @InjectRepository(BasketItem)
        private itemRepo: Repository<BasketItem>
    ) {}

    async findAll(paginationDto: PaginationDto) {
        return await this.itemRepo.find({
            skip: paginationDto.skip,
            take: paginationDto.limit ?? DEFAULT_PAGE_SIZE,
        });
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
        await this.itemRepo.save(body);
    }

    async delete(id: number) {
        await this.itemRepo.delete(id);
    }

    async update(id: number, body: CreateBasketItemDto) {
        await this.itemRepo.update(id, body);
    }
}