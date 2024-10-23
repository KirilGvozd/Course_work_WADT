import {Body, Controller, Delete, Get, Param, Post, Put, Query} from "@nestjs/common";
import {TypeService} from "./type.service";
import {CreateTypeDto} from "./dto/createTypeDto";
import {PaginationDto} from "../pagination.dto";

@Controller('type')
export class TypeController {
    constructor(private readonly typeService: TypeService) {}

    @Get()
    findAll(@Query() paginationDto: PaginationDto) {
        return this.typeService.findAll(paginationDto);
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.typeService.findOne(id);
    }

    @Post()
    create(@Body() body: CreateTypeDto) {
        return this.typeService.create(body);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() body: CreateTypeDto) {
        return this.typeService.update(id, body);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.typeService.delete(id);
    }
}