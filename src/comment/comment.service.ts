import {Injectable, NotFoundException} from "@nestjs/common";
import {Repository} from "typeorm";
import {Comment} from "../entities/comment.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {CreateCommentDto} from "./dto/createCommentDto";

@Injectable()
export class CommentService {
    constructor(
        @InjectRepository(Comment)
        private commentRepository: Repository<Comment>
    ) {}

    async findAll() {
        return await this.commentRepository.find();
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
        return await this.commentRepository.save(body);
    }

    async update(id: number, data: CreateCommentDto){
        return await this.commentRepository.update(id, data);
    }

    async delete(id: number) {
        return await this.commentRepository.delete(id);
    }
}