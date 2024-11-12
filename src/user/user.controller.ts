import {Body, Controller, Delete, Get, Param, Put, Query} from "@nestjs/common";
import {UserService} from "./user.service";
import {CreateUserDto} from "./dto/createUserDto";
import {PaginationDto} from "../pagination.dto";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    findAll(@Query() paginationDto: PaginationDto) {
        return this.userService.findAll(paginationDto);
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.userService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() body: CreateUserDto) {
        return this.userService.update(id, body);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.userService.delete(id);
    }
}