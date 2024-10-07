import {Body, Controller, Delete, Get, Param, Patch, Post} from "@nestjs/common";
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
    findOne(@Param('id') id: number) {
        return this.chatService.findOne();
    }

    @Post()
    create(@Body() dto: CreateChatDto) {
        return this.chatService.create(dto);
    }

    @Patch(':id')
    update(@Param('id') id: number) {
        return this.chatService.update();
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.chatService.delete();
    }
}