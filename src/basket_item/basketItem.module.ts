import {BasketItemController} from "./basketItem.controller";
import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {BasketItem} from "../entities/basketItem.entity";
import {BasketItemService} from "./basketItem.service";

@Module({
    imports: [TypeOrmModule.forFeature([BasketItem])],
    controllers: [BasketItemController],
    providers: [BasketItemService],
})
export class BasketItemModule {}