import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe} from "@nestjs/common";
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
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.commentService.findOne();
    }

    @Post()
    @UsePipes(new ValidationPipe({ whitelist: true }))
    create(@Body() body: CreateCommentDto) {
        return this.commentService.create(body);
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number) {
        return this.commentService.update();
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.commentService.delete();
    }
}