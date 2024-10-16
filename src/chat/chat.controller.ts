import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from "@nestjs/common";
import {ChatService} from "./chat.service";
import {CreateChatDto} from "./dto/createChatDto";

@Controller('chat')
export class ChatController {
    constructor(private readonly chatService: ChatService) {}

    @Get()
    findAll() {
        return this.chatService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.chatService.findOne(id);
    }

    @Post()
    create(@Body() body: CreateChatDto) {
        return this.chatService.create(body);
    }

    @Put(':id')
    update(@Body() body: CreateChatDto, @Param('id', ParseIntPipe) id: number) {
        return this.chatService.updateMessage(id, body);
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.chatService.delete(id);
    }
}