import {IsInt} from "class-validator";

export class CreateBasketItemDto {
    @IsInt()
    itemId: number;

    @IsInt()
    basketId: number;

    @IsInt()
    userId: number;

    @IsInt()
    quantity: number;
}