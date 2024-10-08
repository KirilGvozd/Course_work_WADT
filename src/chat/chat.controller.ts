import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from "@nestjs/common";
import {ChatService} from "./chat.service";
import {Chat} from "../entities/chat.entity";

@Controller('chat')
export class ChatController {
    constructor(private readonly chatService: ChatService) {}

    @Get()
    findAll() {
        return this.chatService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.chatService.findOne();
    }

    @Post()
    create(@Body() body: Chat) {
        return this.chatService.create(body);
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number) {
        return this.chatService.update();
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.chatService.delete();
    }
}