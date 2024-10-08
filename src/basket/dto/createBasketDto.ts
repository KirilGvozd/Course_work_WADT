import {IsInt} from "class-validator";


export class CreateBasketDto {
    @IsInt()
    userId: number;
}