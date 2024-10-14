import {Injectable, NotFoundException} from "@nestjs/common";
import {Repository} from "typeorm";
import {Chat} from "../entities/chat.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {CreateChatDto} from "./dto/createChatDto";

@Injectable()
export class ChatService {
    constructor(
        @InjectRepository(Chat)
        private chatRepository: Repository<Chat>
    ) {}

    async findAll() {
        return await this.chatRepository.find();
    }

    async findOne(id: number) {
        const result = await this.chatRepository.findOne({
            where: {
                id
            }
        });

        if (!result) throw new NotFoundException("Not Found");

        return result;
    }

    async create(body: CreateChatDto) {
        return await this.chatRepository.save(body);
    }

    async updateMessage(messageId: number, body: CreateChatDto) {
        return await this.chatRepository.update(messageId, body);
    }

    async delete(id: number) {
        return await this.chatRepository.delete(id);
    }
}