import {IsArray, IsDate, IsInt, IsString} from "class-validator";

export class CreateCommentDto {
    @IsInt()
    userId: number;

    @IsInt()
    itemId: number;

    @IsArray()
    attachments: string[]

    @IsString()
    date: string

    @IsString()
    text: string;
}