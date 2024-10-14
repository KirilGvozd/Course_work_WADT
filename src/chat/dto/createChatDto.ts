import {IsDate, IsInt, IsString} from "class-validator";

export class CreateChatDto {
    @IsInt()
    senderId: number;

    @IsInt()
    receiverId: number;

    @IsString()
    messageText: string;

    @IsDate()
    messageDate: Date;
}