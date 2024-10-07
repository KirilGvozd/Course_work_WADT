import {Body, Controller, Delete, Get, Param, Patch, Post} from "@nestjs/common";
import {TypeService} from "./type.service";
import {CreateTypeDto} from "./dto/createTypeDto";

@Controller('type')
export class TypeController {
    constructor(private readonly typeService: TypeService) {}

    @Get()
    findAll() {
        return this.typeService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.typeService.findOne();
    }

    @Post()
    create(@Body() dto: CreateTypeDto) {
        return this.typeService.create(dto);
    }

    @Patch(':id')
    update(@Param('id') id: number) {
        return this.typeService.update();
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.typeService.delete();
    }
}