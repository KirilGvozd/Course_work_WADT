import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
    Query,
    UsePipes,
    ValidationPipe
} from "@nestjs/common";
import {BasketService} from "./basket.service";
import {CreateBasketDto} from "./dto/createBasketDto";
import {PaginationDto} from "../pagination.dto";

@Controller('basket')
export class BasketController {
    constructor(private readonly basketService: BasketService) {}

    @Get()
    findAll(@Query() paginationDto: PaginationDto) {
        return this.basketService.findAll(paginationDto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.basketService.findOne(id);
    }

    @Post()
    @UsePipes(new ValidationPipe({ whitelist: true }))
    create(@Body() body: CreateBasketDto) {
        return this.basketService.create(body);
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.basketService.delete(id);
    }
}