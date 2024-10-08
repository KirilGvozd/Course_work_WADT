import {IsArray, IsEmail, IsInt, IsNumber, IsString} from "class-validator";

export class CreateUserDto {
    @IsEmail()
    email: string;

    @IsString()
    role: string;

    @IsString()
    password: string;

    @IsString()
    name: string;

    @IsNumber()
    rate: number;

    @IsArray()
    @IsInt()
    favourites: number[];
}