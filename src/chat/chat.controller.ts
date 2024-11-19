import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, Req, UseGuards} from "@nestjs/common";
import {ChatService} from "./chat.service";
import {CreateChatDto} from "./dto/createChatDto";
import {PaginationDto} from "../pagination.dto";
import {UpdateChatDto} from "./dto/updateChatDto.dto";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";

@UseGuards(JwtAuthGuard)
@Controller('chat')
export class ChatController {
    constructor(private readonly chatService: ChatService) {}

    @Get()
    async findAll(@Query() paginationDto: PaginationDto, @Req() request) {
        const userId = request.user.id;
        return await this.chatService.findAll(paginationDto, userId);
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number, @Req() request) {
        const userId = request.user.id;
        return await this.chatService.findOne(id, userId);
    }

    @Post()
    async create(@Body() body: CreateChatDto) {
        await this.chatService.create(body);
    }

    @Put(':id')
    async update(@Body() body: UpdateChatDto, @Param('id', ParseIntPipe) id: number, @Req() request) {
        const userId = request.user.id;
        await this.chatService.updateMessage(id, body, userId);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number, @Req() request) {
        const userId = request.user.id;
        await this.chatService.delete(id, userId);
    }
}