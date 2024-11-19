import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
    Query, Req, UseGuards,
    UsePipes,
    ValidationPipe
} from "@nestjs/common";
import {CommentService} from "./comment.service";
import {CreateCommentDto} from "./dto/createCommentDto";
import {PaginationDto} from "../pagination.dto";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";

@Controller('comment')
export class CommentController {
    constructor(private readonly commentService: CommentService) {}

    @Get()
    findAll(@Query() paginationDto: PaginationDto, @Req() request) {
        const itemId = request.item.id;
        return this.commentService.findAll(paginationDto, itemId);
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ whitelist: true }))
    create(@Body() body: CreateCommentDto, @Req() request) {
        const userRole = request.user.role;
        return this.commentService.create(body, userRole);
    }

    @Put(':id')
    @UseGuards(JwtAuthGuard)
    update(@Body() body: CreateCommentDto, @Param('id', ParseIntPipe) id: number, @Req() request) {
        const userId = request.user.id;
        return this.commentService.update(id, body, userId);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    delete(@Param('id', ParseIntPipe) id: number, @Req() request) {
        const userId = request.user.id;
        return this.commentService.delete(id, userId);
    }
}