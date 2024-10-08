import {Module} from "@nestjs/common";
import {BasketController} from "./basket.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Basket} from "../entities/basket.entity";
import {BasketService} from "./basket.service";

@Module({
    imports: [TypeOrmModule.forFeature([Basket])],
    controllers: [BasketController],
    providers: [BasketService],
})
export class BasketModule {}