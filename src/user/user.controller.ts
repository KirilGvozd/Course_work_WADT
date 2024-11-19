import {Body, Controller, Delete, Get, Param, Post, Put, Query, Req, UseGuards} from "@nestjs/common";
import {UserService} from "./user.service";
import {CreateUserDto} from "./dto/createUserDto";
import {PaginationDto} from "../pagination.dto";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        await this.userService.create(createUserDto);
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    findOne(@Req() request) {
        const id = request.user.id;
        return this.userService.findOne(id);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    delete(@Req() request) {
        const id = request.user.id;
        return this.userService.delete(id);
    }
}