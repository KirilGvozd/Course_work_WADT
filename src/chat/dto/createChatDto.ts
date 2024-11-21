import {IsInt, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateChatDto {
    @ApiProperty({
        description: "Sender id",
    })
    @IsInt()
    senderId: number;

    @ApiProperty({
        description: "Receiver id",
    })
    @IsInt()
    receiverId: number;

    @ApiProperty({
        description: "Your message",
        default: "Some new message",
    })
    @IsString()
    messageText: string;
}