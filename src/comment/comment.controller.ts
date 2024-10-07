import {Body, Controller, Delete, Get, Param, Patch, Post} from "@nestjs/common";
import {CommentService} from "./comment.service";
import {CreateCommentDto} from "./dto/createCommentDto";

@Controller('comment')
export class CommentController {
    constructor(private readonly commentService: CommentService) {}

    @Get()
    findAll() {
        return this.commentService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.commentService.findOne();
    }

    @Post()
    create(@Body() dto: CreateCommentDto) {
        return this.commentService.create(dto);
    }

    @Patch(':id')
    update(@Param('id') id: number) {
        return this.commentService.update();
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.commentService.delete();
    }
}