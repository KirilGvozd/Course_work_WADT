import {Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {Comment} from "../entities/comment.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {CreateCommentDto} from "./dto/createCommentDto";

@Injectable()
export class CommentService {
    constructor(
        @InjectRepository(Comment)
        private itemRepo: Repository<Comment>
    ) {}

    async findAll() {}

    async findOne() {}

    async create(body: CreateCommentDto) {}

    async update() {}

    async delete() {}
}