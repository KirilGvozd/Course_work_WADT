import {IsDate, IsInt, IsString} from "class-validator";

export class CreateCommentDto {
    @IsInt()
    userId: number;

    @IsInt()
    itemId: number;

    @IsString()
    attachments: string[]

    @IsDate()
    date: string

    @IsString()
    text: string;
}