import {Injectable, NotFoundException} from "@nestjs/common";
import {Repository} from "typeorm";
import {Comment} from "../entities/comment.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {CreateCommentDto} from "./dto/createCommentDto";
import {PaginationDto} from "../pagination.dto";
import {DEFAULT_PAGE_SIZE} from "../utils/constants";

@Injectable()
export class CommentService {
    constructor(
        @InjectRepository(Comment)
        private commentRepository: Repository<Comment>
    ) {}

    async findAll(paginationDto: PaginationDto) {
        return await this.commentRepository.find({
            skip: paginationDto.skip,
            take: paginationDto.limit ?? DEFAULT_PAGE_SIZE,
        });
    }

    async findOne(id: number) {
        const result = await this.commentRepository.findOne({
            where: {
                id
            }
        });

        if (!result) throw new NotFoundException("Not Found");
    }

    async create(body: CreateCommentDto) {

        body.date = new Date().toISOString();
        return await this.commentRepository.save(body);
    }

    async update(id: number, data: CreateCommentDto){
        return await this.commentRepository.update(id, data);
    }

    async delete(id: number) {
        return await this.commentRepository.delete(id);
    }
}