import {IsArray, IsInt, IsString} from "class-validator";

export class CreateCommentDto {
    @IsInt()
    userId: number;

    @IsInt()
    itemId: number;

    @IsArray()
    attachments: string[]

    date: string

    @IsString()
    text: string;
}