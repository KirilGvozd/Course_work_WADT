import {Body, Controller, Delete, Get, Param, Patch, Post} from "@nestjs/common";
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
    create(@Body() dto: CreateItemDto) {
        return this.itemService.create(dto);
    }

    @Patch(':id')
    update(@Param('id') id: number) {
        return this.itemService.update();
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.itemService.delete();
    }
}