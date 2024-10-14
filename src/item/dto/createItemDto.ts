import {IsArray, IsInt, IsNumber, IsPositive, IsString, Length} from "class-validator";


export class CreateItemDto {
    @IsInt()
    @IsPositive()
    typeId: number

    @IsArray()
    prices: number[]

    @IsArray()
    images: string[]

    @IsString()
    @Length(1, 40, { message: 'Length error' })
    name: string

    @IsString()
    description: string

    @IsNumber()
    @IsPositive()
    price: number

}