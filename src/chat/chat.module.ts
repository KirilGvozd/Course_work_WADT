import {ChatController} from "./chat.controller";
import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Chat} from "../entities/chat.entity";
import {ChatService} from "./chat.service";

@Module({
    imports: [TypeOrmModule.forFeature([Chat])],
    controllers: [ChatController],
    providers: [ChatService],
})
export class ChatModule {}