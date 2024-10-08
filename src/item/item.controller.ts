import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {ItemService} from "./item.service";
import {CreateItemDto} from "./dto/createItemDto";

@Controller('item')
export class ItemController {
    constructor(private readonly itemService: ItemService) {}

    @Get()
    findAll() {
        return this.itemService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.itemService.findOne();
    }

    @Post()
    create(@Body() body: CreateItemDto) {
        return this.itemService.create(body);
    }

    @Put(':id')
    update(@Param('id') id: number) {
        return this.itemService.update();
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.itemService.delete();
    }
}