import {IsInt} from "class-validator";

export class CreateBasketItemDto {
    @IsInt()
    itemId: number;

    @IsInt()
    basketId: number;

    @IsInt()
    quantity: number;
}