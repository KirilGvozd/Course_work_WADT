import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query} from "@nestjs/common";
import {BasketItemService} from "./basketItem.service";
import {CreateBasketItemDto} from "./dto/createBasketItemDto";
import {PaginationDto} from "../pagination.dto";

@Controller('basketItem')
export class BasketItemController {
    constructor(private readonly basketItemService: BasketItemService) {}

    @Get()
    findAll(@Query() paginationDto: PaginationDto) {
        return this.basketItemService.findAll(paginationDto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.basketItemService.findOne(id);
    }

    @Post()
    create(@Body() body: CreateBasketItemDto) {
        return this.basketItemService.create(body);
    }

    @Put(':id')
    update(@Body() body: CreateBasketItemDto, @Param('id', ParseIntPipe) id: number) {
        return this.basketItemService.update(id, body);
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.basketItemService.delete(id);
    }
}