import {Body, Controller, Delete, Get, Param, Patch, Post} from "@nestjs/common";
import {BasketItemService} from "./basketItem.service";
import {Basket} from "../entities/basket.entity";
import {CreateBasketItemDto} from "./dto/createBasketItemDto";

@Controller('basketItem')
export class BasketItemController {
    constructor(private readonly basketItemService: BasketItemService) {}

    @Get()
    findAll() {
        return this.basketItemService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.basketItemService.findOne();
    }

    @Post()
    create(@Body() dto: CreateBasketItemDto) {
        return this.basketItemService.create(dto);
    }

    @Patch(':id')
    update(@Param('id') id: number) {
        return this.basketItemService.update();
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.basketItemService.delete();
    }
}