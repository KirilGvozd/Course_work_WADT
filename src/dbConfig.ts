
import {PostgresConnectionOptions} from "typeorm/driver/postgres/PostgresConnectionOptions";
import {Item} from "./entities/item.entity";
import {User} from "./entities/user.entity";
import {Basket} from "./entities/basket.entity";
import {BasketItem} from "./entities/basketItem.entity";
import {Chat} from "./entities/chat.entity";
import {Comment} from "./entities/comment.entity";
import {Type} from "./entities/type.entity";

export const pgConfig: PostgresConnectionOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'KirillGvozd2003',
    database: 'flea_market_app',
    entities: [Item, User, Basket, BasketItem, Chat, Comment, Type],
    synchronize: true,
}