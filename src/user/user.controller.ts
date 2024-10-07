import {Body, Controller, Delete, Get, Param, Patch, Post} from "@nestjs/common";
import {UserService} from "./user.service";
import {CreateUserDto} from "./dto/createUserDto";

@Controller('item')
export class ItemController {
    constructor(private readonly userService: UserService) {}

    @Get()
    findAll() {
        return this.userService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.userService.findOne();
    }

    @Post()
    create(@Body() dto: CreateUserDto) {
        return this.userService.create(dto);
    }

    @Patch(':id')
    update(@Param('id') id: number) {
        return this.userService.update();
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.userService.delete();
    }
}