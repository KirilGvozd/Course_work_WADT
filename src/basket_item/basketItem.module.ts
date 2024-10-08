import {BasketItemController} from "./basketItem.controller";
import {Module} from "@nestjs/common";

@Module({
    controllers: [BasketItemController],
})
export class BasketItemModule {}