import {Injectable, NotFoundException} from "@nestjs/common";
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

    async findAll() {
        return await this.basketRepository.find();
    }

    async findOne(id: number){
        const result = await this.basketRepository.findOne({
            where: {
                id,
            }
        });

        if (!result) throw new NotFoundException();

        return result;
    }

    async create(body: CreateBasketDto) {
        return await this.basketRepository.save(body);
    }

    async delete(id: number) {
        return await this.basketRepository.delete(id);
    }
}