import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from "@nestjs/common";
import {BasketItemService} from "./basketItem.service";
import {CreateBasketItemDto} from "./dto/createBasketItemDto";

@Controller('basketItem')
export class BasketItemController {
    constructor(private readonly basketItemService: BasketItemService) {}

    @Get()
    findAll() {
        return this.basketItemService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.basketItemService.findOne();
    }

    @Post()
    create(@Body() dto: CreateBasketItemDto) {
        return this.basketItemService.create(dto);
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number) {
        return this.basketItemService.update();
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.basketItemService.delete();
    }
}