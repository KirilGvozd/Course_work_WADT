import {IsInt, IsNumber, IsPositive, IsString, Length} from "class-validator";


export class CreateItemDto {
    @IsInt()
    @IsPositive()
    typeId: number

    @IsNumber()
    @IsPositive()
    prices: number[]

    @IsString()
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