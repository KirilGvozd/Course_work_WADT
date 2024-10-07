import {IsNumber, IsPositive, IsString, Length} from "class-validator";


export class CreateTypeDto {
    @IsString()
    @Length(1, 40, { message: 'Length error' })
    name: string

    @IsString()
    description: string

    @IsNumber()
    @IsPositive()
    price: number


}