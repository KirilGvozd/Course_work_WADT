import {Module} from "@nestjs/common";
import {ItemController} from "./item.controller";
import {ItemService} from "./item.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Item} from "../entities/item.entity";
import {JwtStrategy} from "../auth/jwt.strategy";

@Module({
    imports: [TypeOrmModule.forFeature([Item])],
    controllers: [ItemController],
    providers: [ItemService, JwtStrategy],
})
export class ItemModule {}