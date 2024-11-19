import {IsString} from "class-validator";

export class UpdateChatDto {
    @IsString()
    messageText: string;
}