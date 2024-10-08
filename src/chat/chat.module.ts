import {ChatController} from "./chat.controller";
import {Module} from "@nestjs/common";

@Module({
    controllers: [ChatController],
})
export class ChatModule {}