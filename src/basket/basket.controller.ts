import {Body, Controller, Delete, Get, Param, Patch, Post} from "@nestjs/common";
import {BasketService} from "./basket.service";
import {Basket} from "../entities/basket.entity";
import {CreateBasketDto} from "./dto/createBasketDto";

@Controller('basket')
export class BasketController {
    constructor(private readonly basketService: BasketService) {}

    @Get()
    findAll() {
        return this.basketService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.basketService.findOne();
    }

    @Post()
    create(@Body() dto: CreateBasketDto) {
        return this.basketService.create(dto);
    }

    @Patch(':id')
    update(@Param('id') id: number) {
        return this.basketService.update();
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.basketService.delete();
    }
}