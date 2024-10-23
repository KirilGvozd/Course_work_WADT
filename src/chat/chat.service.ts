import {ConflictException, ForbiddenException, Injectable, NotFoundException} from "@nestjs/common";
import {Repository} from "typeorm";
import {Chat} from "../entities/chat.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {CreateChatDto} from "./dto/createChatDto";
import {PaginationDto} from "../pagination.dto";
import {DEFAULT_PAGE_SIZE} from "../utils/constants";

@Injectable()
export class ChatService {
    constructor(
        @InjectRepository(Chat)
        private chatRepository: Repository<Chat>
    ) {}

    async findAll(paginationDto: PaginationDto) {
        return await this.chatRepository.find({
            skip: paginationDto.skip,
            take: paginationDto.limit ?? DEFAULT_PAGE_SIZE,
        });
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
        if (body.receiverId === body.senderId) throw new ConflictException("Sender and receiver ID's are the same");

        body.messageDate = new Date().toISOString();
        return await this.chatRepository.save(body);
    }

    async updateMessage(messageId: number, body: CreateChatDto) {
        return await this.chatRepository.update(messageId, body);
    }

    async delete(id: number) {
        return await this.chatRepository.delete(id);
    }
}