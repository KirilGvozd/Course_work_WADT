import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query} from "@nestjs/common";
import {BasketItemService} from "./basketItem.service";
import {CreateBasketItemDto} from "./dto/createBasketItemDto";
import {PaginationDto} from "../pagination.dto";

@Controller('basketItem')
export class BasketItemController {
    constructor(private readonly basketItemService: BasketItemService) {}

    @Get()
    async findAll(@Query() paginationDto: PaginationDto) {
        return await this.basketItemService.findAll(paginationDto);
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
        return this.basketItemService.findOne(id);
    }

    @Post()
    async create(@Body() body: CreateBasketItemDto) {
        await this.basketItemService.create(body);
    }

    @Put(':id')
    async update(@Body() body: CreateBasketItemDto, @Param('id', ParseIntPipe) id: number) {
        await this.basketItemService.update(id, body);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        await this.basketItemService.delete(id);
    }
}