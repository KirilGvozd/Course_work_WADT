import {Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {Chat} from "../entities/chat.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {CreateBasketItemDto} from "../basket_item/dto/createBasketItemDto";

@Injectable()
export class ChatService {
    constructor(
        @InjectRepository(Chat)
        private chatRepository: Repository<Chat>
    ) {}

    async findAll() {}

    async findOne() {}

    async create(dto: CreateBasketItemDto) {}

    async update() {}

    async delete() {}
}