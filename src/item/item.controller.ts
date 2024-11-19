import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query,
    Req,
    UseGuards,
    UsePipes,
    ValidationPipe
} from "@nestjs/common";
import {ItemService} from "./item.service";
import {CreateItemDto} from "./dto/createItemDto";
import {Item} from "../entities/item.entity";
import {PaginationDto} from "../pagination.dto";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";

@Controller('item')
export class ItemController {
    constructor(private readonly itemService: ItemService) {}

    @Get()
    findAll(@Query() paginationDto: PaginationDto) {
        return this.itemService.findAll(paginationDto);
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.itemService.findOne(id);
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    create(@Body() body: CreateItemDto, @Req() request) {
        const userRole = request.user.role;
        return this.itemService.create(body, userRole);
    }

    @Put(':id')
    @UseGuards(JwtAuthGuard)
    update(@Param('id') id: number, @Body() body: CreateItemDto, @Req() request) {
        const userId = request.user.id;
        return this.itemService.update(id, body, userId);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    delete(@Param('id') id: number, @Req() request) {
        const userId = request.user.id;
        return this.itemService.delete(id, userId);
    }
}