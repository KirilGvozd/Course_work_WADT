import {Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {Basket} from "../entities/basket.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {CreateBasketDto} from "./dto/createBasketDto";

@Injectable()
export class BasketService {
    constructor(
        @InjectRepository(Basket)
        private basketRepository: Repository<Basket>
    ) {}

    async findAll() {}

    async findOne() {}

    async create(dto: CreateBasketDto) {}

    async update() {}

    async delete() {}
}