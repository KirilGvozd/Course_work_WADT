import {IsInt, IsISO8601, IsString} from "class-validator";

export class CreateChatDto {
    @IsInt()
    senderId: number;

    @IsInt()
    receiverId: number;

    @IsString()
    messageText: string;

    messageDate: string;
}