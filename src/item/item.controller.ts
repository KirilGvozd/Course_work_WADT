import {Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe} from "@nestjs/common";
import {ItemService} from "./item.service";
import {CreateItemDto} from "./dto/createItemDto";
import {Item} from "../entities/item.entity";

@Controller('item')
export class ItemController {
    constructor(private readonly itemService: ItemService) {}

    @Get()
    findAll() {
        return this.itemService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.itemService.findOne(id);
    }

    @Post()
    create(@Body() body: CreateItemDto) {
        console.log(body);
        return this.itemService.create(body);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() body: CreateItemDto) {
        return this.itemService.update(id, body);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.itemService.delete(id);
    }
}